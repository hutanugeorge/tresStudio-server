import { Router } from 'express'

import { getAppointments, getPromotions, getRewards } from "../controllers/userDashboard";
import isAuth from "../middleware/isAuth"
import { userDashboardRoutes } from "../utils/constants"


const { getPostPromotions, getPostRewards, getPostAppointments } = userDashboardRoutes
const router: Router = Router()

router.get(getPostPromotions, isAuth, getPromotions)
router.get(getPostRewards, isAuth, getRewards)
router.get(getPostAppointments, isAuth, getAppointments)

export default router