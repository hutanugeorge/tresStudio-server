import { NextFunction, Request, Response } from 'express'

import LandingPage from '../models/landingPage'

export const getPhrase = async (req: Request, res: Response, next: NextFunction) => {
   const landingPageInfo = await LandingPage.findOne().select('landingPhrase')
   res.status(200)
      .json({
               message: 'Landing page phrase fetched successfully',
               landingInfo: landingPageInfo
            })
}

export const postPhrase = async (req: Request, res: Response, next: NextFunction) => {
   const updatedLandingPageInfo = { landingPhrase: 'Hello11' }
   await LandingPage.findOneAndUpdate({}, updatedLandingPageInfo)
   res.status(200)
            .json({ updatedLandingPageInfo })
}