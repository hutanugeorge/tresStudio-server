import { Router } from 'express'

import controllers from '../controllers/authentication'
import { postLoginValidator, postSignUpValidator } from "./validators"
import { login } from '../utils/constants'


const router = Router()
const { postLogin, postSignUp } = login

router.post(postLogin, postLoginValidator, controllers.postLogin)
router.post(postSignUp, postSignUpValidator, controllers.postSignUp)

export default router