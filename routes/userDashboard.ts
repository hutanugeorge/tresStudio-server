import { Router } from 'express'

import { getAppointments, getPromotions, getRewards, getUserInfo } from "../controllers/userDashboard";
import isAuth from "../middleware/isAuth"
import { userDashboardRoutes, presentationPageRoutes } from "../utils/constants"


const { getPostPromotionsRoute, getPostRewardsRoute, getPostUserInfoRoute } = userDashboardRoutes
const router: Router = Router()

router.get(getPostPromotionsRoute, isAuth, getPromotions)
router.get(getPostRewardsRoute, isAuth, getRewards)
router.get(presentationPageRoutes.getPostAppointmentsRoute, isAuth, getAppointments)
router.get(getPostUserInfoRoute, isAuth, getUserInfo)


export default router