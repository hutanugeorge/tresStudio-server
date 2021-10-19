import {Schema, model} from 'mongoose'

import { IAppointment } from "../shared/interfaces/userDashboard";

const appointmentSchema = new Schema({
   serviceTitle: {
      type: String,
      required: true
   },
   employeeName: {
      type: String,
      required: true
   },
   date: {
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
   userName: {
      type: String,
      required: false
   }
})

export default model<IAppointment>("Appointment", appointmentSchema)