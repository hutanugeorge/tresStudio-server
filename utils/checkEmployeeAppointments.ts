import Employee from "../models/employee"
import { IEmployee } from "../shared/interfaces/employee"
import { IEmployeeAppointment } from "../shared/interfaces/userDashboard"
import { Errors } from "./constants"
import getCustomError from "./getCustomError"


export const checkEmployeeAppointments = async (date: string, hour: string, employeeId: string) => {
   const fetchedEmployee: IEmployee | null = await Employee.findOne({ _id: employeeId })
   if (fetchedEmployee) {
      fetchedEmployee.appointments?.forEach((appointment: IEmployeeAppointment) => {
         if (String(appointment.date) === date && String(appointment.hour) === hour)
            throw getCustomError(Errors.wrongDate, 406)
      })
   } else
      throw getCustomError(Errors.employeeDoesntExist, 404)

}

export const updateEmployeeAppointments = async (date: string, hour: string, employeeId: string, serviceTitle: string) => {
   await Employee.findOneAndUpdate({ _id: employeeId }, {
      "$push": {
         "appointments": { date, hour, serviceTitle }
      }
   })
}
