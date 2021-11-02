import { Request, Response, NextFunction } from "express"

import Promotion from '../models/promotions'
import Rewards from '../models/rewards'
import Appointment from '../models/appointment'
import User from "../models/user"
import Controller from "../shared/controllerType"
import { IAppointment, IPromotion, IReward, IUserRequest } from "../shared/interfaces/userDashboard"


export const getUserInfo: Controller = async (req: IUserRequest, res: Response, _: NextFunction): Promise<void> => {
   //TODO type userInfo correctly
   const userInfo = await User.findOne({ _id: req.userId }).select('email firstName lastName rewardsPoints promotionCode role')
   res.status(200)
      .json({ userInfo })
}

export const getPromotions: Controller = async (req: Request, res: Response, _: NextFunction): Promise<void> => {
   const promotions: IPromotion[] = await Promotion.find()
   res.status(200)
      .json({ promotions })
}

export const getRewards: Controller = async (req: Request, res: Response, _: NextFunction): Promise<void> => {
   const rewards: IReward[] = await Rewards.find()
   res.status(200)
      .json({ rewards })
}

export const getAppointments: Controller = async (req: IUserRequest, res: Response, _: NextFunction): Promise<void> => {
   const appointments: IAppointment[] = await Appointment.find({ email: req.userEmail })
   res.status(200)
      .json({ appointments })
}
