import {Schema, model} from 'mongoose'

import { IAppointment } from "../shared/interfaces/userDashboard";

const appointmentSchema = new Schema({
   firstName: {
      type: String,
      required: true
   },
   lastName: {
      type: String,
      required: true
   },
   email: {
      type: String,
      required: true
   },
   phone: {
      type: String,
      required: true
   },
   message: {
      type: String,
      required: false
   },
   serviceTitle: {
      type: String,
      required: true
   },
   subService: {
      type: String,
      required: true
   },
   employee: {
      type: Schema.Types.ObjectId,
      required: true
   },
   date: {
      type: String,
      required: true
   },
   hour: {
      type: String,
      required: true
   },
   status: {
      type: String,
      required: true
   },
   userId: {
      type: Schema.Types.ObjectId,
      required: false
   },
})

export default model<IAppointment>("Appointment", appointmentSchema)
