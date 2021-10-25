import { Document } from 'mongoose'

export interface IFeature extends Document {
  readonly image: string
  readonly title: string
  readonly description: string
}

export interface ILandingInfo extends Document {
  readonly landingPhrase: string
  readonly landingButtonPhrase: string
}

export interface IReview extends Document {
  readonly image: string
  readonly fullName: string
  readonly review: string
}
