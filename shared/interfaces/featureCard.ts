import { Document } from 'mongoose'

export default interface IFeatureCard extends Document {
  image: string
  title: string
  description: string
}