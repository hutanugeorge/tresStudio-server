import { Schema, model } from 'mongoose'

import { IUser } from "../shared/interfaces/user"


const userSchema = new Schema({
   email: {
      type: String,
      required: true
   },
   password: {
      type: String,
      required: true
   },
   firstName: {
      type: String,
      required: true
   },
   lastName: {
      type: String,
      required: true
   },
   role: {
      type: String,
      required: true
   }
})

export default model<IUser>('User', userSchema)