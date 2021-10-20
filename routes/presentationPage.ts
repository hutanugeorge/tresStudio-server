import { Router } from 'express'

import {
  presentationPageRoutes,
  userDashboardRoutes
} from '../utils/constants'
import { getEmployees, getFeatures, getPhrase, getReviews, postAppointment } from '../controllers/presentationPage'


const router: Router = Router()

const { getPostFeatures, getPostLandingInfo, getPostReviews, getEmployeesRoute } = presentationPageRoutes

router.get(getPostLandingInfo, getPhrase)
router.get(getPostFeatures, getFeatures)
router.get(getPostReviews, getReviews)
router.get(getEmployeesRoute, getEmployees)
router.post(userDashboardRoutes.getPostAppointmentsRoute, postAppointment)

export default router