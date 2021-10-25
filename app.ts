import express, { Application, NextFunction, Request, Response } from 'express'

import mongoose from 'mongoose'
import bodyParser from "body-parser"
import cors from 'cors'

import presentationPage from './routes/presentationPage'
import userDashboard from './routes/userDashboard'
import authentication from './routes/authentication'
import admin from './routes/admin'
import { MONGODB_KEY } from './keys'
import { CustomError } from "./shared/interfaces/customError"


const app: Application = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use((req: Request, res: Response, next: NextFunction): void => {
  res.header('Access-Control-Allow-Origin', [ '*' ])
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header("Access-Control-Allow-Headers","Authorization")
  res.header("Access-Control-Allow-Headers","*")
  next()
})
app.use(presentationPage)
app.use(userDashboard)
app.use(authentication)
app.use(admin)

app.use((err: CustomError, req: Request, res: Response, next: NextFunction): void  => {
  res.status(Number(err.statusCode)).json({errors: err.message})
})
mongoose.connect(MONGODB_KEY)
  .then(() => app.listen(3001))
  .then(() => console.log('Connected'))
  .catch(err => console.log(err))
