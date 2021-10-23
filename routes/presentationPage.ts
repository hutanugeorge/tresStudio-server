import { Router } from 'express'
import { body, check } from 'express-validator'

import {
   presentationPageRoutes,
} from '../utils/constants'
import { getEmployees, getFeatures, getPhrase, getReviews, postAppointment } from '../controllers/presentationPage'


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
router.post(getPostAppointmentsRoute, [
   check('firstName', 'First name must be at least 3 characters long')
      .isLength({ min: 3 })
      .isString(),
   check('lastName')
      .isLength({ min: 3 })
      .withMessage('Last name must be at least 3 characters long')
      .isString()
      .withMessage('Last name must be at least 3 characters long'),
   check('email')
      .normalizeEmail()
      .isEmail()
      .withMessage('Enter a valid email'),
   check('phone')
      .isLength({ min: 10 })
      .withMessage('Enter a valid phone number'),
   body('subService')
      .not()
      .isEmpty()
      .withMessage('Select sub service'),
   check('services')
      .isEmpty()
      .withMessage('Select service'),
], postAppointment)

export default router