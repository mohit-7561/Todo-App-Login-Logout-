import jwt from "jsonwebtoken"

export const sendCookie = (user, res, message, statusCode = 200)=>{

  const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)
  
  res.cookie("cookie", token, {
    httpOnly: true,
    maxAge: 15* 60 * 1000,
    sameSite: process.env.NODE_ENV === "Development"? "lax" : "none",
    secure: process.env.NODE_ENV === "Development"? false: true
  })

  res.status(statusCode).json({
    success: true,
    message
  })
}