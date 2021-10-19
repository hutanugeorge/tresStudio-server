import { NextFunction, Request, Response } from 'express'

import LandingPage from '../models/landingPage'
import Feature from '../models/features'
import Review from '../models/reviews'
import { IFeature, ILandingInfo, IReview } from '../shared/interfaces/presentationPage'
import Controller from "../shared/controllerType";


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

export const postAppointment: Controller = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
   const {} = req.body

}