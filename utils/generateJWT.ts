import jwt from "jsonwebtoken"


type GenerateJWT = (userId: string, JWTKEY: string, expireTime: string) => string

const generateJWT: GenerateJWT = (userId: string, JWTKEY: string, expireTime: string): string => {
   return jwt.sign({ userId: userId }, JWTKEY, { expiresIn: expireTime })
}

export default generateJWT