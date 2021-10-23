import { Request, Response } from "express"
import { validationResult } from "express-validator"
import { IValidatorError } from "../shared/interfaces/authentification"


const getValidationErrors = (req: Request): IValidatorError => {
   const errorsObject: { [prop: string]: string } = {}
   const errors = validationResult(req)

   errors.array().forEach((error: { param: string, msg: string }) => {
      errorsObject[`${error.param}`] = error.msg
   })
   return errorsObject
}

export default getValidationErrors