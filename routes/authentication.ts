import { Router } from 'express'

import controllers from '../controllers/authentication'
import {
   postLoginValidator,
   postResetPasswordMailValidator,
   postResetPasswordValidator,
   postSignUpValidator
} from "./validators"
import { login } from '../utils/constants'


const router = Router()
const { postLogin, postSignUp, postResetPasswordEmail, postResetPassword } = login

router.post(postLogin, postLoginValidator, controllers.postLogin)
router.post(postSignUp, postSignUpValidator, controllers.postSignUp)
router.post(postResetPasswordEmail, postResetPasswordMailValidator, controllers.postResetPasswordEmail)
router.post(postResetPassword, postResetPasswordValidator, controllers.postResetPassword)

export default router