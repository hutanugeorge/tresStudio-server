import { Router } from 'express'

import controllers from '../controllers/authentication'
import { login } from '../utils/constants'


const router = Router()
const { postLogin, postSignUp } = login

router.post(postLogin, controllers.postLogin)
router.post(postSignUp, controllers.postSignUp)

export default router