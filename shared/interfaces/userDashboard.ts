import { Request } from "express"
import { Document, Schema } from "mongoose";


export interface IPromotion extends Document {
   title: string
   saleType: string
   amount: number
   description: string
}

export interface IReward extends Document {
   title: string
   services: IRewardService[]
}

export interface IRewardService extends Document {
   title: string
   points: number
}

export interface IAppointment2 extends Document {
   firstName: string
   lastName: string
   email: string
   phone: string
   message: string
   serviceTitle: string
   subService: string
   employee: Schema.Types.ObjectId
   date: string
   hour: string
   status: string
   userId: Schema.Types.ObjectId
}

export interface IAppointment extends Document {
   serviceTitle: string
   employeeName: string
   date: Date
   status: string
   userId?: string
}

export interface IUserRequest extends Request {
   userId?: string
}

export type IEmployeeAppointment = Pick<IAppointment2, "serviceTitle" | "date" | "hour">