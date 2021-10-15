import { NextFunction, Request, Response } from "express"
import jwt from 'jsonwebtoken'

import { JWTKEY } from "../keys"
import Controller from "../shared/controllerType"
import catchError from "../utils/catchError"
import getCustomError from "../utils/getCustomError"


interface IUserRequest extends Request {
   userId?: string
}

const isAuth: Controller = (req: IUserRequest, res: Response, next: NextFunction): void => {
   try {
      const authHeader = req.get('authorization')
      if (!authHeader)
         throw getCustomError('Not authenticated', 401)
      const token = authHeader.split(' ')[1]
      let decodedToken: any
      decodedToken = jwt.verify(token, JWTKEY)
      req.userId = decodedToken.userId
      next()
   } catch (error: any) {
      catchError(error, next)
   }
}

export default isAuth