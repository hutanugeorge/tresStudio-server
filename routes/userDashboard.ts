import { Router } from 'express'

import { getPromotions } from "../controllers/userDashboard";
import { userDashboardRoutes } from "../utils/constants"


const { getPostPromotions } = userDashboardRoutes
const router: Router = Router()

router.get(getPostPromotions, getPromotions)

export default router