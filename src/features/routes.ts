
import express from "express";
import order from "./order/routes";
import system from "./system/routes";
import { errorHandler } from "../shared/middlewares/error";

const app = express();

app.use(express.json());
app.use("/", system);
app.use("/orders", order);
app.use(errorHandler);

export default app;
