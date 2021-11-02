import { Router } from 'express'

import { getEmployees, postSignup } from "../controllers/adminDashboard"
import { adminDashboardRoutes } from "../utils/constants"


const { postEmployee } = adminDashboardRoutes
const router = Router()

router.post(postEmployee, postSignup)
router.get(adminDashboardRoutes.getEmployees, getEmployees)

export default router