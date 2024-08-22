import { Router } from "express";
import { OrderController } from "./controller";

const router = Router();

router.post("/", OrderController.createOrder);
router.get("/", OrderController.getOrders);
router.put("/:id/status", OrderController.updateOrderStatus);

export default router;
