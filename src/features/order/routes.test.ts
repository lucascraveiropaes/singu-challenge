import request from "supertest";
import express from "express";
import orderRoutes from "./routes";
import OrderService from "./service";
import { HTTP_CODES } from "../../shared/codes";

const app = express();
app.use(express.json());
app.use("/orders", orderRoutes);

describe("Order Routes", () => {
  beforeEach(() => {
    // Clear all orders before each test
    OrderService.orders = [];
  });

  it("POST /orders - should create a new order", async () => {
    const response = await request(app)
      .post("/orders")
      .send({ items: ["Burger", "Fries"] });

    expect(response.status).toBe(HTTP_CODES.SUCCESS);
    expect(response.body).toHaveProperty("id");
    expect(response.body.items).toEqual(["Burger", "Fries"]);
    expect(response.body.status).toBe("pending");
  });

  it("GET /orders - should retrieve all orders", async () => {
    // Prepopulate with some orders
    OrderService.create(["Pizza"]);
    OrderService.create(["Pasta"]);

    const response = await request(app).get("/orders");

    expect(response.status).toBe(HTTP_CODES.SUCCESS);
    expect(response.body.length).toBe(2);
  });

  it("PUT /orders/:id/status - should update the status of an order", async () => {
    const order = OrderService.create(["Salad"]);

    const response = await request(app)
      .put(`/orders/${order.id}/status`)
      .send({ status: "ready" });

    expect(response.status).toBe(HTTP_CODES.SUCCESS);
    expect(response.body.status).toBe("ready");
  });

  it("PUT /orders/:id/status - should return 404 if the order is not found", async () => {
    const response = await request(app)
      .put("/orders/non-existent-id/status")
      .send({ status: "ready" });

    expect(response.status).toBe(HTTP_CODES.NOT_FOUND.code);
    expect(response.text.includes(HTTP_CODES.NOT_FOUND.message)).toBeTruthy;
  });
});
