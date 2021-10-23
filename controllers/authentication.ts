import { NextFunction, Request, Response } from "express"

import User from '../models/user'
import Controller from "../shared/controllerType"
import { IValidatorError } from "../shared/interfaces/authentification"
import catchError from "../utils/catchError"
import { bcryptComparePasswords, bcryptGeneratePassword } from "../utils/bcryptPasswordsHandelers"
import { Errors, SuccessMessages, UserRoles } from "../utils/constants"
import generateJWT from "../utils/generateJWT"
import getValidationErrors from "../utils/getValidationErrors"
import { JWTKEY } from '../keys'


export const postLogin: Controller = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
   const { email, password } = req.body
   try {
      const errors = getValidationErrors(req)
      if (Object.keys(errors).length !== 0) {
         res.status(403).json({ errors })
         return
      }
      const user = await User.findOne({ email })
      if (!user) {
         res.status(401).json({ errors: { email: Errors.noEmailFound } })
         return
      }
      if (!await bcryptComparePasswords(password, user.password)) {
         res.status(401).json({ errors: { password: Errors.wrongPassword } })
         return
      }
      const token = generateJWT({ userId: user._id.toString(), email }, JWTKEY, '1h')
      res.status(200).json({ token, firstName: user.firstName, userId: user._id.toString() })
   } catch (err: any) {
      catchError(err, next)
   }
}

export const postSignUp: Controller = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
   const { email, firstName, lastName, password, repeatPassword } = req.body
   console.log(req.body)
   try {
      const errors = getValidationErrors(req)
      if (Object.keys(errors).length !== 0) {
         res.status(403).json({ errors })
         return
      }
      const existentUser = await User.findOne({ email })
      if (existentUser) {
         res.status(403).json({ errors: { email: Errors.emailExists } })
         return
      }
      if (password !== repeatPassword) {
         res.status(403).json({ errors: { password: Errors.passwordDoesntMatch } })
         return
      }
      const hashedPassword = await bcryptGeneratePassword(password)
      let promotionCode = `${firstName}_${lastName}`
      let user = await User.findOne({ promotionCode })
      while (user) {
         promotionCode = String(Math.floor(Math.random() * 100)) + promotionCode + String(Math.floor(Math.random() * 100))
         user = await User.findOne({ promotionCode })
      }
      const userCreated = await new User(
         {
            ...req.body, password: hashedPassword, role: UserRoles.customer, rewardsPoints: 0, promotionCode
         }).save()
      res.status(200).json({ message: SuccessMessages.signup, userId: userCreated._id })
   } catch (err: any) {
      catchError(err, next)
   }
}

export default { postLogin, postSignUp }


