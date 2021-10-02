import {Schema, model} from 'mongoose'

import { IPromotion } from "../shared/interfaces/presentationPage";


const promotionSchema: Schema = new Schema ({
   title: {
      type: Schema.Types.String,
      required: true
   },
   saleType: {
      type: Schema.Types.String,
      required: true
   },
   amount: {
      type: Schema.Types.Number,
      required: true
   },
   description: {
      type: Schema.Types.String,
      required: true
   }
})

export default model<IPromotion>('Promotion', promotionSchema)