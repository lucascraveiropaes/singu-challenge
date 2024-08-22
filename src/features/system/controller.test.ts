import request from "supertest";
import express, { Application } from "express";
import SystemController from "./controller";
import { HTTP_CODES } from "../../shared/codes";

const app: Application = express();
app.get("/status", SystemController.getAPIStatus);

describe("SystemController", () => {
  it("GET /status - should return API status with a success message", async () => {
    const response = await request(app).get("/status");

    expect(response.status).toBe(HTTP_CODES.SUCCESS);
    expect(response.body).toEqual({ statue: true, message: "All systems working!" });
  });

  it("should handle errors gracefully", async () => {
    const errorApp: Application = express();
    
    // Override the getAPIStatus method to throw an error for this test
    jest.spyOn(SystemController, "getAPIStatus").mockImplementationOnce(() => {
      throw new Error("Test Error");
    });

    errorApp.get("/status", SystemController.getAPIStatus);
    errorApp.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
      res.status(500).json({ message: err.message });
    });

    const response = await request(errorApp).get("/status");

    expect(response.status).toBe(500);
    expect(response.body.message).toBe("Test Error");
  });
});
