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

export interface IAppointment extends Document {
   serviceTitle: string
   employeeName: string
   date: Date
   status: string
   userId?: string
   userName: string
}

export interface IUserRequest extends Request {
   userId?: string
}