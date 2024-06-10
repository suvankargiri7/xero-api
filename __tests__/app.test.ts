import request from "supertest";
import app from "../src/app";

describe("Test app.ts", () => {
  test("Catch routes", async () => {
    const res = await request(app).get("/");
    expect(res.text).toEqual("Hello, Custom Xero Api Service");
  });
});
