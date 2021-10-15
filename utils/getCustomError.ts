import { CustomError } from "../shared/interfaces/customError"


type GetCustomError = (message: string, statusCode: number) => CustomError

const getCustomError: GetCustomError = (message: string, statusCode: number): CustomError => {
   const error: CustomError = new Error(message)
   error.statusCode = statusCode
   return  error
}

export default getCustomError