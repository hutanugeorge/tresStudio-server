import { Document } from 'mongoose'

export default interface ILandingInfo extends Document {
  landingPhrase: string
  landingButtonPhrase: string
}