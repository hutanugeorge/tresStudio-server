import { NextFunction, Request, Response } from "express";

import User from '../models/User'
import Controller from "../shared/controllerType"
import catchError from "../utils/catchError"
import { bcryptComparePasswords, bcryptGeneratePassword } from "../utils/bcryptPasswordsHandelers"
import { Errors, SuccessMessages, UserRoles } from "../utils/constants"
import generateJWT from "../utils/generateJWT"
import getCustomError from "../utils/getCustomError"
import { JWTKEY } from '../keys'


export const postLogin: Controller = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
   const { email, password } = req.body
   try {
      const user = await User.findOne({ email })
      if (!user)
         throw getCustomError(Errors.noEmailFound, 401)
      if (!await bcryptComparePasswords(password, user.password))
         throw getCustomError(Errors.wrongPassword, 401)
      const token = generateJWT(user._id.toString(), JWTKEY, '1h')
      res.status(200).json({ token, name: user.firstName, userId: user._id.toString() })
   } catch (err: any) {
      catchError(err, next)
   }
}

export const postSignUp: Controller = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
   const { email, firstName, lastName, password } = req.body
   try {
      const existentUser = await User.findOne({ email })
      if (existentUser)
         throw getCustomError(Errors.emailExists, 405)
      const hashedPassword = await bcryptGeneratePassword(password)
      const userCreated = await new User(
         { email, firstName, lastName, password: hashedPassword, role: UserRoles.customer }).save()
      res.status(200).json({ message: SuccessMessages.signup, userId: userCreated._id })
   } catch (err: any) {
      catchError(err, next)
   }
}

export default { postLogin, postSignUp }


