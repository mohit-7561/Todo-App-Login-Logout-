import { users } from "../models/user.js"

import jwt from "jsonwebtoken"

export const isAuthenticated = async(req, res, next)=>{

  const {cookie} = req.cookies

  if(!cookie){
   return res.status(401).json({
     success: false,
     message: "Login First"
   })
  }

 const decoded =  jwt.verify(cookie, process.env.JWT_SECRET)

 req.user = await users.findById(decoded.id)
 next()



}