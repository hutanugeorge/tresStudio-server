import jwt from "jsonwebtoken"

interface IUserInfo{
   readonly userId?: string
   readonly email: string
}
type GenerateJWT = (userInfo: IUserInfo, JWTKEY: string, expireTime: string) => string

const generateJWT: GenerateJWT = (userInfo: IUserInfo, JWTKEY: string, expireTime: string): string =>
   jwt.sign({ ...userInfo }, JWTKEY, { expiresIn: expireTime })


export default generateJWT