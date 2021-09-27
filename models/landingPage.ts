import { model, Schema } from 'mongoose'

import { ILandingInfo } from '../shared/interfaces/presentationPage'


const landingPageSchema: Schema = new Schema({
  landingPhrase: {
    type: Schema.Types.String,
    required: true
  },
  landingButtonPhrase: {
    type: Schema.Types.String,
    required: true
  }
})

export default model<ILandingInfo>('LandingPage', landingPageSchema)