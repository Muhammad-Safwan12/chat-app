import express from "express";
import {
  checkAuth,
  loginUser,
  signupUser,
  updateUserProfile,
} from "../controllers/user.controller.js";
import { protectRoute } from "../middleware/auth.js";

const router = express.Router();  

router.post("/signup", signupUser);
router.post("/login", loginUser);
router.put("/update-profile", protectRoute, updateUserProfile);
router.get("/check", protectRoute, checkAuth);

export default router;