
import { getMyProfile, login, logout, register  } from "../controllers/user.js"
import express from "express"
import { isAuthenticated } from "../middlewares/auth.js";


const router = express.Router();

// router.get('/msg', registeredMsg)

router.get('/myProfile', isAuthenticated, getMyProfile)
router.get('/logout', logout)



// router.get('/:id', findUserById)


router.post('/new', register)
router.post('/login', login)








export default router;