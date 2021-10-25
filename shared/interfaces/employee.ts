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
   readonly unavailability?: IUnavailabilityPeriod[]
   readonly appointments?: Pick<IAppointment, 'serviceTitle' | 'date' | 'hour'>[]
}

interface IUnavailabilityPeriod {
   readonly startDate: string
   readonly endDate: string
}
