import { model, Schema } from 'mongoose'

import { IFeature } from '../shared/interfaces/presentationPage'


const featureSchema: Schema = new Schema({
  image: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true }
})

export default model<IFeature>('Feature', featureSchema)