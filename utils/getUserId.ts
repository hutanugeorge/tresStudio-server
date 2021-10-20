import jwt from "jsonwebtoken"
import { JWTKEY } from "../keys"
import { IUserRequest } from "../shared/interfaces/userDashboard"


const getUserId = (req: IUserRequest) => {
   const authHeader = req.get('authorization')
   if (authHeader) {
      const token = authHeader.split(' ')[1]
      let decodedToken: any
      try {
         decodedToken = jwt.verify(token, JWTKEY)
      } catch (e) {
         return null
      }
      return decodedToken.userId
   }
}

export default getUserId