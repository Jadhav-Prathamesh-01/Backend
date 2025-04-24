import express from "express";
import {
  signInUser,
  signUpUser,
  signInAdmin,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/sign-up", signUpUser);
userRouter.post("/sign-in", signInUser);
userRouter.post("/admin", signInAdmin);

export default userRouter;
