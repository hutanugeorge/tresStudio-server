import { NextFunction, Request, Response } from "express"
import employee from "../models/employee"

import Employee from '../models/employee'
import Controller from "../shared/controllerType"
import { IEmployee } from "../shared/interfaces/employee"
import { bcryptGeneratePassword } from "../utils/bcryptPasswordsHandelers"
import catchError from "../utils/catchError"
import { Errors, SuccessMessages } from "../utils/constants"
import getCustomError from "../utils/getCustomError"


interface IEmployeeAppointment {
   readonly _id?: string
   readonly lastThreeAppointments: [
      {
         readonly date: string,
         readonly hour: string
      }
   ]
}

interface IEmployeeInfo extends Pick<IEmployee, 'firstName' | 'lastName' | 'jobTitle' | 'field' | 'email' | 'phone'>, Object {
}

interface IEmployeesInfo extends IEmployeeInfo, IEmployeeAppointment {
}

export const postSignup: Controller = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
   const { firstName, lastName, email, password, phone, appointments, jobTitle, field, unavailability } = req.body
   try {
      const employee: IEmployee | null = await Employee.findOne({ email })
      if (employee)
         throw getCustomError(Errors.emailExists, 405)
      const hashedPassword = await bcryptGeneratePassword(password)
      const employeeCreated: IEmployee | null = await new Employee({
         firstName,
         lastName,
         email,
         password: hashedPassword,
         jobTitle,
         field,
         phone,
         role: 'employee',
         appointments,
         unavailability
      }).save()
      res.status(200).json({ message: SuccessMessages.signup, employeeId: employeeCreated._id })
   } catch (err: any) {
      catchError(err, next)
   }
}

export const getEmployees: Controller = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
   try {
      const lastThreeAppointmentsByEmployee: IEmployeeAppointment[] = await Employee.aggregate([
         { '$unwind': '$appointments', },
         { '$sort': { 'appointments.date': 1 } },
         {
            '$group': {
               '_id': '$email',
               'lastThreeAppointments': { '$push': '$appointments' }
            }
         },
         {
            '$project': {
               'lastThreeAppointments': { '$slice': [ '$lastThreeAppointments', 0, 3 ] }
            }
         },
      ])
      const employeesInfo: IEmployeeInfo[] = await Employee.find().select('firstName lastName jobTitle field email phone')

      const employees: IEmployeesInfo[] = []
      employeesInfo.forEach((employeeInfo) =>
         lastThreeAppointmentsByEmployee.forEach((employeeAppointments) => {
            const employeeInfoDataMapped = JSON.parse(JSON.stringify(employeeInfo))
            const employeeAppointmentsDataMapped = JSON.parse(JSON.stringify(employeeAppointments))
            employeeInfo.email === employeeAppointments._id && employees.push({ ...employeeInfoDataMapped, ...employeeAppointmentsDataMapped })
         })
      )
      res.status(200).json({ employees })
   } catch (err: any) {
      catchError(err, next)
   }
}


