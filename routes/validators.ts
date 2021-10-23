import { body, check } from "express-validator"


export const postAppointmentValidator = [
   check('firstName', 'First name must be at least 3 characters long')
      .isLength({ min: 3 })
      .isString(),
   check('lastName', 'Last name must be at least 3 characters long')
      .isLength({ min: 3 })
      .isString(),
   check('email', 'Enter a valid email')
      .normalizeEmail()
      .isEmail(),
   check('phone', 'Enter a valid phone number')
      .isLength({ min: 10 }),
   body('subService', 'Select sub service')
      .not()
      .isEmpty(),
   check('services', 'Select service')
      .isEmpty()
]

export const postLoginValidator = [
   check('email', 'Enter a valid email')
      .normalizeEmail()
      .isEmail()
]

export const postSignUpValidator = [
   check('firstName', 'Enter a valid first name')
      .isString()
      .isLength({ min: 3 }),
   check('lastName', 'Enter a valid last name')
      .isString()
      .isLength({ min: 3 }),
   check('email', 'Enter a valid email')
      .normalizeEmail()
      .isEmail(),
   check('password', 'Password must be at least 8 characters long')
      .isLength({ min: 8 })
      .isString(),
   check('repeatPassword', 'Password must be at least 8 characters long')
      .isLength({ min: 8 })
      .isString()
]