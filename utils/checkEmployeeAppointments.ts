import Employee from "../models/employee"
import { IEmployee } from "../shared/interfaces/employee"
import { IEmployeeAppointment } from "../shared/interfaces/userDashboard"
import { Errors } from "./constants"
import getCustomError from "./getCustomError"


type CheckEmployeeAppointments = (date: string, hour: string, employeeId: string) => Promise<void>
type UpdateEmployeeAppointments = (date: string, hour: string, employeeId: string, serviceTitle: string) => Promise<void>

export const checkEmployeeAppointments: CheckEmployeeAppointments = async (date: string, hour: string, employeeId: string): Promise<void> => {
   const fetchedEmployee: IEmployee | null = await Employee.findOne({ _id: employeeId })
   if (fetchedEmployee) {
      fetchedEmployee.appointments?.forEach((appointment: IEmployeeAppointment) => {
         if (String(appointment.date) === date && String(appointment.hour) === hour)
            throw getCustomError(Errors.wrongDate, 406)
      })
   } else
      throw getCustomError(Errors.employeeDoesntExist, 404)

}

export const updateEmployeeAppointments: UpdateEmployeeAppointments = async (date: string, hour: string, employeeId: string, serviceTitle: string): Promise<void> => {
   await Employee.findOneAndUpdate({ _id: employeeId }, {
      "$push": {
         "appointments": { date, hour, serviceTitle }
      }
   })
}

