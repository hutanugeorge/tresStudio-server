import { NextFunction, Response } from "express"
import jwt from 'jsonwebtoken'

import { JWTKEY } from "../keys"
import Controller from "../shared/controllerType"
import { IUserRequest } from "../shared/interfaces/userDashboard"
import catchError from "../utils/catchError"
import getCustomError from "../utils/getCustomError"


const isAuth: Controller = (req: IUserRequest, res: Response, next: NextFunction): void => {
   try {
      const authHeader = req.get('authorization')
      if (!authHeader)
         throw getCustomError('Not authenticated', 401)
      const token = authHeader.split(' ')[1]
      let decodedToken: any
      decodedToken = jwt.verify(token, JWTKEY)
      req.userId = decodedToken.userId
      req.userEmail = decodedToken.email
      next()
   } catch (error: any) {
      catchError(error, next)
   }
}

export default isAuth