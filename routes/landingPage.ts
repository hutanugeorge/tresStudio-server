import { Router } from 'express'

import { getPhrase } from '../controllers/landingPage'
import { landingPageRoutes } from '../utils/constants'

const router: Router = Router()
const { getPostLandingInfo } = landingPageRoutes

router.get(getPostLandingInfo, getPhrase)


export default router