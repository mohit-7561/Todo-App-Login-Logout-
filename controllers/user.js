import { users } from "../models/user.js"
import bcrypt from "bcrypt"
import { sendCookie } from "../utils/features.js"
import { errorHandler } from "../middlewares/err.js"




export const getMyProfile = (req, res)=>{



   res.json({
    success: true,
    user: req.user
  })


   
    
  } 




export const login = async(req, res, next)=>{

  try {
    const{email, password} = req.body
  
    const findUser = await users.findOne({email}).select("+password")

    if(!findUser){
      return next(new errorHandler("Invalid email or password", 400))
    }
   
    const passwordMatch = await bcrypt.compare(password, findUser.password)

    if(!passwordMatch){
      return next(new errorHandler("Invalid password", 400))
    }

    sendCookie(findUser, res, `Welcome back, ${findUser.name}`, 200);
    
  } catch (error) {
    next(error)
  }

  
  }


export const register = async(req, res, next)=>{

try {
  const {name, email, password} = req.body

  const findUser = await users.findOne({email})

  if(findUser){
    return next(new errorHandler("You already Registered", 409))
  }
  

  const hashPassword = await bcrypt.hash(password, 10);

  const user =  await users.create({
    name, email, password: hashPassword
  })

  sendCookie(user, res, "Registered Successfully", 201)

} catch (error) {
  next(error)
}
    

  
  }

export const logout = (req, res)=>{

  res.status(200).cookie("cookie", "", {
    expires: new Date(Date.now()),
    sameSite: process.env.NODE_ENV === "Development"? "lax" : "none",
    secure: process.env.NODE_ENV === "Development"? false: true
  }).json({
    success: true,
    Message: "You have been logout"
  })


}


