import express, { Application } from "express";
import request from "supertest";
import systemRoutes from "./routes";
import { HTTP_CODES } from "../../shared/codes";

const app: Application = express();
app.use("/status", systemRoutes);

describe("System Routes", () => {
  it("GET /status - should return API status with a success message", async () => {
    const response = await request(app).get("/status/");

    expect(response.status).toBe(HTTP_CODES.SUCCESS);
    expect(response.body).toEqual({ statue: true, message: "All systems working!" });
  });

  it("should return 404 for undefined routes", async () => {
    const response = await request(app).get("/undefined-route");

    expect(response.status).toBe(404);
  });
});
