import dayjs from "dayjs"
import { NextFunction, Request, Response } from 'express'

import Employee from "../models/employee"
import LandingPage from '../models/landingPage'
import Feature from '../models/features'
import Review from '../models/reviews'
import Appointment from '../models/appointment'
import { IValidatorError } from "../shared/interfaces/authentification"
import { IEmployee } from "../shared/interfaces/employee"
import { IFeature, ILandingInfo, IReview } from '../shared/interfaces/presentationPage'
import Controller from "../shared/controllerType";
import { IUserRequest } from "../shared/interfaces/userDashboard"
import catchError from "../utils/catchError"
import { checkEmployeeAppointments, updateEmployeeAppointments } from "../utils/checkEmployeeAppointments"
import { SuccessMessages } from "../utils/constants"
import getUserId from "../utils/getUserId"
import getValidationErrors from "../utils/getValidationErrors"


export const getPhrase: Controller = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
   try {
      const landingInfo: ILandingInfo[] = await LandingPage.find()
      res.status(200)
         .json({ landingInfo: landingInfo[0] })
   } catch (err: any) {
      catchError(err, next)
   }
}

export const getFeatures: Controller = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
   try {
      const features: IFeature[] = await Feature.find()
      res.status(200)
         .json({ features })
   } catch (err: any) {
      catchError(err, next)
   }
}

export const getReviews: Controller = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
   try {
      const reviews: IReview[] = await Review.find()
      res.status(200)
         .json({ reviews })
   } catch (err: any) {
      catchError(err, next)
   }
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
      const errors: IValidatorError = getValidationErrors(req)
      if (Object.keys(errors).length !== 0) {
         res.status(403).json({ errors })
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