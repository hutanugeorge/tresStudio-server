import jwt from "jsonwebtoken"
import { JWTKEY } from "../keys"
import { IUserRequest } from "../shared/interfaces/userDashboard"


const getUserId = (req: IUserRequest) => {
   const authHeader = req.get('authorization')
   if (authHeader) {
      const token = authHeader.split(' ')[1]
      const decodedToken: any = jwt.verify(token, JWTKEY)
      return decodedToken.userId
   }
   return null
}

export default getUserId