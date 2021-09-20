import express, {
   Application,
   NextFunction,
   Request,
   Response
} from 'express'
import mongoose from 'mongoose'

import landingPageRoutes from './routes/landingPage'
import { mongodbURI } from './utils/constants'


const app: Application = express()
app.use((req:Request, res:Response, next:NextFunction) => {
   res.append('Access-Control-Allow-Origin', ['*']);
   res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
   res.append('Access-Control-Allow-Headers', 'Content-Type');

   next();
});
app.use('/landing', landingPageRoutes)

mongoose.connect(mongodbURI)
        .then(() => app.listen(3001))
        .then(() => console.log('Connected'))
        .catch(err => console.log(err))
