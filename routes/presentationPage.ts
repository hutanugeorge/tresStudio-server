import { Router } from 'express'

import {
  featureSectionRoutes,
  landingPageRoutes,
  reviewSectionRoutes
} from '../utils/constants'
import { getFeatures, getPhrase, getReviews } from '../controllers/presentationPage'


const router: Router = Router()

const { getPostFeatures } = featureSectionRoutes
const { getPostLandingInfo } = landingPageRoutes
const { getPostReviews } = reviewSectionRoutes

router.get(getPostLandingInfo, getPhrase)
router.get(getPostFeatures, getFeatures)
router.get(getPostReviews, getReviews)

export default router