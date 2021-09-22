import express, { Application, NextFunction, Request, Response } from 'express'
import mongoose from 'mongoose'

import landingPageRoutes from './routes/landingPage'
import featureSectionRoutes from './routes/featureSection'
import { MONGODB_KEY } from './keys'


const app: Application = express()
app.use((req: Request, res: Response, next: NextFunction) => {
  res.append('Access-Control-Allow-Origin', [ '*' ])
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.append('Access-Control-Allow-Headers', 'Content-Type')

  next()
})
app.use(landingPageRoutes)
app.use(featureSectionRoutes)

mongoose.connect(MONGODB_KEY)
  .then(() => app.listen(3001))
  .then(() => console.log('Connected'))
  .catch(err => console.log(err))
