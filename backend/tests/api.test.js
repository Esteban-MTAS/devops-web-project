const request = require("supertest");
const app = require("../server");

describe("API Tests", () => {
  it("GET /api/hello debe responder con mensaje", async () => {
    const res = await request(app).get("/api/hello");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("message", "Hola desde el backend!");
  });

  it("POST /api/items debe agregar un item", async () => {
    const res = await request(app)
      .post("/api/items")
      .send({ name: "Nuevo Item" });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("message", "Item agregado correctamente");
  });

  it("GET /api/items debe devolver lista de items", async () => {
    const res = await request(app).get("/api/items");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});

