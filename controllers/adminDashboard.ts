import { NextFunction, Request, Response } from "express"

import Employee from '../models/employee'
import Controller from "../shared/controllerType"
import { IEmployee } from "../shared/interfaces/employee"
import { bcryptGeneratePassword } from "../utils/bcryptPasswordsHandelers"
import catchError from "../utils/catchError"
import { Errors, SuccessMessages } from "../utils/constants"
import getCustomError from "../utils/getCustomError"


export const postSignup: Controller = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
   const { firstName, lastName, email, password, phone, appointments, jobTitle, field, unavailability } = req.body
   try {
      const employee: IEmployee | null = await Employee.findOne({ email })
      if (employee)
         throw getCustomError(Errors.emailExists, 405)
      const hashedPassword = await bcryptGeneratePassword(password)
      const employeeCreated: IEmployee | null = await new Employee({
         firstName, lastName, email, password: hashedPassword, jobTitle, field, phone, role: 'employee', appointments, unavailability
      }).save()
      res.status(200).json({ message: SuccessMessages.signup, employeeId: employeeCreated._id })
   } catch (err: any) {
      catchError(err, next)
   }
}


