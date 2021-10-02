import { Document } from 'mongoose'

export interface IFeature extends Document {
  image: string
  title: string
  description: string
}

export interface ILandingInfo extends Document {
  landingPhrase: string
  landingButtonPhrase: string
}

export interface IReview extends Document {
  image: string
  fullName: string
  review: string
}

export interface IPromotion extends Document {
  title: string
  saleType: string
  amount: number
  description: string
}