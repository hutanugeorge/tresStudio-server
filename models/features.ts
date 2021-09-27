import { model, Schema } from 'mongoose'

import { IFeature } from '../shared/interfaces/presentationPage'


const featureSchema: Schema = new Schema({
  image: {
    type: Schema.Types.String,
    required: true
  },
  title: {
    type: Schema.Types.String,
    required: true
  },
  description: {
    type: Schema.Types.String,
    required: true
  }
})

export default model<IFeature>('Feature', featureSchema)