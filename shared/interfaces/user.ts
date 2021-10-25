import { Document } from "mongoose"


export interface IUser extends Document {
   readonly _id: string
   readonly email: string
   readonly password: string
   readonly firstName: string
   readonly lastName: string
   readonly role: string
   readonly rewardsPoint: number
   readonly promotionCode: string
}

export interface IUserInfo extends Document {
   readonly _id: string
   readonly firstName: string
   readonly lastName: string
   readonly rewardsPoint: number
   readonly promotionCode: string
}