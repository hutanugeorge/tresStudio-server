import { Router } from 'express'

import {
   presentationPageRoutes,
} from '../utils/constants'
import { getEmployees, getFeatures, getPhrase, getReviews, postAppointment } from '../controllers/presentationPage'
import { postAppointmentValidator } from "./validators"


const router: Router = Router()

const {
   getPostFeatures,
   getPostLandingInfo,
   getPostReviews,
   getEmployeesRoute,
   getPostAppointmentsRoute
} = presentationPageRoutes

router.get(getPostLandingInfo, getPhrase)
router.get(getPostFeatures, getFeatures)
router.get(getPostReviews, getReviews)
router.get(getEmployeesRoute, getEmployees)
router.post(getPostAppointmentsRoute, postAppointmentValidator, postAppointment)

export default router