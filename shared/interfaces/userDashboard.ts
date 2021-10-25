import { Request } from "express"
import { Document, Schema } from "mongoose";


export interface IPromotion extends Document {
   readonly title: string
   readonly saleType: string
   readonly amount: number
   readonly description: string
}

export interface IReward extends Document {
   readonly title: string
   readonly services: IRewardService[]
}

export interface IRewardService extends Document {
   readonly title: string
   readonly points: number
}

export interface IAppointment extends Document {
   readonly firstName: string
   readonly lastName: string
   readonly employeeName: string
   readonly email: string
   readonly phone: string
   readonly message: string
   readonly serviceTitle: string
   readonly subService: string
   readonly employee?: Schema.Types.ObjectId
   readonly date: string
   readonly hour: string
   readonly userId: string
}

export interface IUserRequest extends Request {
   userId?: string
   userEmail?: string
}

export type IEmployeeAppointment = Pick<IAppointment, "serviceTitle" | "date" | "hour">