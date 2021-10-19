import { IAppointment } from "./userDashboard"


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
   appointments?: Pick<IAppointment, 'serviceTitle' | 'date'>[]
}

interface IUnavailabilityPeriod {
   startDate: string
   endDate: string
}
