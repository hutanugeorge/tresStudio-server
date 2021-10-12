import { Router } from 'express'

import { getAppointments, getPromotions, getRewards } from "../controllers/userDashboard";
import { userDashboardRoutes } from "../utils/constants"


const { getPostPromotions, getPostRewards, getPostAppointments } = userDashboardRoutes
const router: Router = Router()

router.get(getPostPromotions, getPromotions)
router.get(getPostRewards, getRewards)
router.get(getPostAppointments, getAppointments)

export default router