import { Request, Response, NextFunction } from "express"

import Promotion from '../models/promotions'
import Rewards from '../models/rewards'
import Appointment from '../models/appointment'
import Controller from "../shared/controllerType"
import { IAppointment, IPromotion, IReward } from "../shared/interfaces/userDashboard"


export const getPromotions: Controller = async (req: Request, res: Response, next: NextFunction) => {
   const promotions: IPromotion[] = await Promotion.find()
   res.status(200)
      .json({ promotions })
}

export const getRewards: Controller = async (req: Request, res: Response, next: NextFunction) => {
   const rewards: IReward[] = await Rewards.find()
   res.status(200)
      .json({ rewards })
}

export const getAppointments: Controller = async (req: Request, res: Response, next: NextFunction) => {
   const appointments: IAppointment[] = await Appointment.find()
   res.status(200)
      .json({ appointments })
}