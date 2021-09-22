import { NextFunction, Request, Response } from 'express'

import LandingPage from '../models/landingPage'
import ILandingInfo from '../shared/interfaces/landingInfo'


type getPhrase = (req: Request, res: Response, next: NextFunction) => void

export const getPhrase: getPhrase = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const landingInfo: ILandingInfo[] = await LandingPage.find()
  res.status(200)
    .json({ landingInfo: landingInfo[ 0 ] })
}
