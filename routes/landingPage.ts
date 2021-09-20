import { Router } from 'express'

import {getPhrase, postPhrase} from '../controllers/landingPage'
import {landingPageRoutes} from '../utils/constants'

const router: Router = Router()

router.get(landingPageRoutes.getPostPhrase, getPhrase)
router.post(landingPageRoutes.getPostPhrase, postPhrase)


export default router