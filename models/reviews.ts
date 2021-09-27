import {model, Schema} from 'mongoose'

import { IReview } from '../shared/interfaces/presentationPage'


const reviewSchema: Schema = new Schema({
  image: {
    type: Schema.Types.String,
    required: true
  },
  fullName: {
    type: Schema.Types.String,
    required: true
  },
  review: {
    type: Schema.Types.String,
    required: true
  }
})

export default model<IReview>('Review', reviewSchema)