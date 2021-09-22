import { model, Schema } from 'mongoose'

import ILandingInfo from '../shared/interfaces/landingInfo'


const landingPageSchema: Schema = new Schema({
  landingPhrase: {
    type: String,
    required: true
  },
  landingButtonPhrase: {
    type: String,
    required: true
  }
})

export default model<ILandingInfo>('LandingPage', landingPageSchema)