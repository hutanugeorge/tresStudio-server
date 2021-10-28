import { NextFunction } from "express"
import nodemailer from "nodemailer"

import { adminEmail } from "../keys"
import catchError from "./catchError"


type SendResetPasswordMail = (userEmail: string, token: string, next: NextFunction) => Promise<void>

export const sendResetPasswordMail: SendResetPasswordMail = async (userEmail: string, token: string, next: NextFunction): Promise<void> => {
   try {
      const transporter = nodemailer.createTransport({
         service: 'gmail',
         auth: {
            user: adminEmail.email,
            pass: adminEmail.pass
         }
      })
      const mailOptions = {
         from: adminEmail.email,
         to: userEmail,
         subject: 'Reset password',
         text: `Reset password: http://localhost:3000/resetPassword?token=${token}`
      }
      await transporter.sendMail(mailOptions)
   } catch (err: any) {
      catchError(err, next)
   }
}