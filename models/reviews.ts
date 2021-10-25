import { model, Schema } from 'mongoose'

import { IReview } from '../shared/interfaces/presentationPage'


const reviewSchema: Schema = new Schema({
   image: { type: String, required: true },
   fullName: { type: String, required: true },
   review: { type: String, required: true }
})

export default model<IReview>('Review', reviewSchema)