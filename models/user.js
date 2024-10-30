import  {mongoose}  from "mongoose"


const usersData = new mongoose.Schema({
  name: {
    type: String,
    required: true,

  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    select: false

  },

  createdAt: {
    type: Date,
    default: new Date(Date.now())
  }
})

export const users = mongoose.model('User', usersData)
