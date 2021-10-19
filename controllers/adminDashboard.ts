import { NextFunction, Request, Response } from "express"

import Employee from '../models/employee'
import Controller from "../shared/controllerType"
import { bcryptGeneratePassword } from "../utils/bcryptPasswordsHandelers"
import catchError from "../utils/catchError"
import { Errors, SuccessMessages } from "../utils/constants"
import getCustomError from "../utils/getCustomError"


export const postSignup: Controller = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
   const { firstName, lastName, email, password, phone, appointments, jobTitle, field, unavailability } = req.body
   try {
      const employee = await Employee.findOne({ email })
      if (employee)
         throw getCustomError(Errors.emailExists, 405)
      const hashedPassword = await bcryptGeneratePassword(password)
      const employeeCreated = await new Employee({
         firstName, lastName, email, password: hashedPassword, jobTitle, field, phone, role: 'employee', appointments, unavailability
      }).save()
      res.status(200).json({ message: SuccessMessages.signup, employeeId: employeeCreated._id })
   } catch (err: any) {
      catchError(err, next)
   }
}

export const getEmployees: Controller = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
   try {
      const employees = await Employee.find().select('firstName lastName jobTitle appointments unavailability field')
      res.status(200).json({ message: SuccessMessages.fetchEmployees, employees})
   } catch (err: any) {
      catchError(err, next)
   }
}
