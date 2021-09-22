import { model, Schema } from 'mongoose'

import IFeatureCard from '../shared/interfaces/featureCard'


const featureCardSchema: Schema = new Schema({
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

export default model<IFeatureCard>('FeatureCard', featureCardSchema)