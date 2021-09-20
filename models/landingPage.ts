import { Schema, model } from 'mongoose'

const landingPageSchema = new Schema({
       landingPhrase: {
          type: String,
          required: true
       },
      landingButtonPhrase: {
          type: String,
         required: true
      }
    })

export default model('LandingPage',  landingPageSchema)