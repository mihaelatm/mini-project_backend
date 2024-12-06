import { Router } from "express";
import { getAllUsers, getUserById } from "../controllers/userControllers.js";

const router = Router();

router.get("/all", getAllUsers);

router.get("/:id", getUserById);

export default router;
