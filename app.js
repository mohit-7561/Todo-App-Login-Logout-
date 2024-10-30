import express from 'express'
import userRouter from './routes/user.js'
import taskRouter from './routes/task.js'
import { configDotenv } from 'dotenv'
import cookieParser from 'cookie-parser'
import { errorMiddleWare } from './middlewares/err.js'
import cors from "cors"

configDotenv({
  path: './data/.env'
})

export const app = express()



app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin: [process.env.FRONTEND_URL],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}))


app.use('/api/v1/users',userRouter)

app.use('/api/v1/task',taskRouter)

app.use(errorMiddleWare)




app.get('/', (req, res)=>{
  res.send("Hi, I am Server")
});


