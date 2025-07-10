import express from "express";
import { protectRoute } from "../middleware/auth.js";
import {
  getMessages,
  getUsersForSidebar,
  markMessageAsSeen,
  sendMessage,
} from "../controllers/message.controller.js";

const router = express();

router.get("/users", protectRoute, getUsersForSidebar);
router.get("/:id", protectRoute, getMessages);
router.put("/mark/:id", protectRoute, markMessageAsSeen);
router.post("/send/:id",protectRoute,sendMessage)

export default router;