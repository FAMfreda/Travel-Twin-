import { Router } from "express";
import { logoutUser, register, userLogin } from "../controllers/user_controllers.js";


const userRouter= Router();

userRouter.post('users/register', register),
userRouter.post('users/login', userLogin)
userRouter.post('users/logout', logoutUser)


export default userRouter



