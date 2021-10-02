import { Request, Response, NextFunction } from "express"

import Promotion from '../models/promotions'
import Controller from "../shared/controllerType"
import { IPromotion } from "../shared/interfaces/presentationPage"


export const getPromotions: Controller = async (req: Request, res: Response, next: NextFunction) => {
   const promotions: IPromotion[] = await Promotion.find()
   res.status(200)
      .json({ promotions })
}