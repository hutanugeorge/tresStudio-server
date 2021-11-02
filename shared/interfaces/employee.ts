import { IAppointment } from "./userDashboard"


export interface IEmployee extends Document {
   readonly _id: string
   readonly firstName: string
   readonly lastName: string
   readonly password: string
   readonly email: string
   readonly field: string
   readonly phone: string
   readonly role: string
   readonly jobTitle: string
   readonly unavailability?: String[]
   readonly appointments?: Pick<IAppointment, 'serviceTitle' | 'date' | 'hour'>[]
}

