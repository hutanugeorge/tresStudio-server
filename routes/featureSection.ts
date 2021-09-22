import { Router } from 'express'

import { featureSectionRoutes } from '../utils/constants'
import { getFeatureCards } from '../controllers/featureSection'


const router: Router = Router()

const { getPostFeatureInfo } = featureSectionRoutes

router.get(getPostFeatureInfo, getFeatureCards)

export default router