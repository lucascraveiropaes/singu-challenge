import { Router } from "express";
import SystemController from "./controller";

const router = Router();

router.get("/", SystemController.getAPIStatus);

export default router;
