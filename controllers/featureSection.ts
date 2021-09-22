import { NextFunction, Request, Response } from 'express'

import FeatureCard from '../models/featureCard'
import IFeatureCard from '../shared/interfaces/featureCard'


type getFeatureCards = (req: Request, res: Response, next: NextFunction) => void

export const getFeatureCards: getFeatureCards = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const featureCards: IFeatureCard[] = await FeatureCard.find()
  res.status(200)
    .json({ featureCards})
}