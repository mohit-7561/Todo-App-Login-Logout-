import express from "express"
import { isAuthenticated } from "../middlewares/auth.js"
import { deleteTask, getMyTask, newTask, updateTask } from "../controllers/task.js"


const router = express.Router()

router.get('/myTask',  isAuthenticated, getMyTask)

router.post("/new", isAuthenticated, newTask)

router.route("/:id").put(isAuthenticated, updateTask).delete(isAuthenticated, deleteTask)


export default router