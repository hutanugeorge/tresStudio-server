import { Schema, model } from 'mongoose'
import { IEmployee } from "../shared/interfaces/employee"


const employeeSchema = new Schema({
   firstName: {
      type: String,
      required: true
   },
   lastName: {
      type: String,
      required: true
   },
   password: {
      type: String,
      required: true
   },
   role: {
      type: String,
      required: true
   },
   jobTitle: {
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
   appointments: {
      type: [ {
         date: {
            type: String,
            required: true
         },
         serviceTitle: {
            type: String,
            required: true
         },
         hour: {
            type: String,
            required: true
         }
      } ],
      required: false
   },
   unavailability: {
      type: [ {
         startDate: {
            type: String,
            required: true
         },
         endDate: {
            type: String,
            required: true
         }
      } ],
      required: false
   }
})

export default model<IEmployee>('Employee', employeeSchema)