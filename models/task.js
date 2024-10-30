import  {mongoose}  from "mongoose"
import { users } from "./user.js"


const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,

  },
  description: {
    type: String,
    required: true,
  },

  isCompleted: {
    type: Boolean,
    default: false

  },
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: users,
    required: true
  },

  createdAt: {
    type: Date,
    default: new Date(Date.now())
  }
})

export const Task = mongoose.model('Task', taskSchema)
