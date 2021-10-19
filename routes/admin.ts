import { Router } from 'express'

import { postSignup } from "../controllers/adminDashboard"
import { adminDashboardRoutes } from "../utils/constants"

const { postEmployee } = adminDashboardRoutes
const router = Router()

router.post(postEmployee, postSignup)

export default router