import { IAppointment2 } from "./userDashboard"


export interface IEmployee extends Document {
   firstName: string
   lastName: string
   password: string
   email: string
   field: string
   phone: string
   role: string
   jobTitle: string
   unavailability?: IUnavailabilityPeriod[]
   appointments?: Pick<IAppointment2, 'serviceTitle' | 'date' | 'hour'>[]
}

interface IUnavailabilityPeriod {
   startDate: string
   endDate: string
}
