
import express from "express";
import  isAuth  from "../middlewares/isAuth.js";
import { askToAssistant, getCurrentUser, updateAssistant } from "../controllers/user.controllers.js";
import upload from "../middlewares/multer.js";

const router = express.Router();

router.get("/current", isAuth, getCurrentUser);
router.post("/update",isAuth,upload.single("assistantImage"),updateAssistant)
router.post("/asktoassistant",isAuth,askToAssistant)
export default router;