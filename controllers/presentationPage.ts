import dayjs from "dayjs"
import { NextFunction, Request, Response } from 'express'
import { validationResult } from 'express-validator'
import { ValidationError } from "express-validator/src/base"

import Employee from "../models/employee"
import LandingPage from '../models/landingPage'
import Feature from '../models/features'
import Review from '../models/reviews'
import Appointment from '../models/appointment'
import { IEmployee } from "../shared/interfaces/employee"
import { IFeature, ILandingInfo, IReview } from '../shared/interfaces/presentationPage'
import Controller from "../shared/controllerType";
import { IUserRequest } from "../shared/interfaces/userDashboard"
import catchError from "../utils/catchError"
import { checkEmployeeAppointments, updateEmployeeAppointments } from "../utils/checkEmployeeAppointments"
import { SuccessMessages } from "../utils/constants"
import getUserId from "../utils/getUserId"


export const getPhrase: Controller = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
   const landingInfo: ILandingInfo[] = await LandingPage.find()
   res.status(200)
      .json({ landingInfo: landingInfo[0] })
}

export const getFeatures: Controller = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
   const features: IFeature[] = await Feature.find()
   res.status(200)
      .json({ features })
}

export const getReviews: Controller = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
   const reviews: IReview[] = await Review.find()
   res.status(200)
      .json({ reviews })
}

export const getEmployees: Controller = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
   try {
      const employees: IEmployee[] = await Employee.find().select('firstName lastName jobTitle appointments unavailability field')
      res.status(200)
         .json({ message: SuccessMessages.fetchEmployees, employees })
   } catch (err: any) {
      catchError(err, next)
   }
}

export const postAppointment: Controller = async (req: IUserRequest, res: Response, next: NextFunction): Promise<void> => {
   const { firstName, mainService, employee, hour, day, } = req.body
   try {
      const errorsObject: { [prop: string]: string}  = {}
      const errors = validationResult(req)

      errors.array().forEach((error:{param: string, msg: string}) => {
         errorsObject[`${error.param}`] = error.msg
      })

      if (!errors.isEmpty()) {
         res.status(403).json({ errors: errorsObject })
         return
      }
      const date = dayjs(new Date().setDate(day)).format('MM/DD/YYYY')
      await checkEmployeeAppointments(date, hour, employee)
      const userId = getUserId(req)
      await new Appointment({ ...req.body, userId, date }).save()
      await updateEmployeeAppointments(date, hour, employee, mainService)
      res.status(200)
         .json({ message: SuccessMessages.appointmentCreated, userFirstName: firstName })
   } catch (err: any) {
      catchError(err, next)
   }
}