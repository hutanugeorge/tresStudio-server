import { Schema, model } from 'mongoose'

import { IPromotion } from "../shared/interfaces/userDashboard";


const promotionSchema: Schema = new Schema({
   title: { type: String, required: true },
   saleType: { type: String, required: true },
   amount: { type: Number, required: true },
   description: { type: String, required: true }
})

export default model<IPromotion>('Promotion', promotionSchema)