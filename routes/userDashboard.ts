import { Router } from 'express'
import { getEmployees } from "../controllers/adminDashboard"

import { getAppointments, getPromotions, getRewards, getUserInfo } from "../controllers/userDashboard";
import isAuth from "../middleware/isAuth"
import { userDashboardRoutes } from "../utils/constants"


const { getPostPromotionsRoute, getPostRewardsRoute, getPostAppointmentsRoute, getPostUserInfoRoute, getEmployeesRoute } = userDashboardRoutes
const router: Router = Router()

router.get(getPostPromotionsRoute, isAuth, getPromotions)
router.get(getPostRewardsRoute, isAuth, getRewards)
router.get(getPostAppointmentsRoute, isAuth, getAppointments)
router.get(getPostUserInfoRoute, isAuth, getUserInfo)
router.get(getEmployeesRoute, getEmployees)

export default router