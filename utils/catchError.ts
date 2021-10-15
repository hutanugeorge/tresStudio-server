import { NextFunction } from "express"

type CatchError = (error: any, next: NextFunction) => void

const catchError: CatchError = (error: any, next: NextFunction): void => {
   !error.statusCode ? error.statusCode = 500 : null
   next(error)
}

export default catchError