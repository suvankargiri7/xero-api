/**
 * @name main app module
 * @description import required modules
 */

import express, { Application } from "express";

import cors from "cors";
import v1Routes from "./api/v1/route";

const app: Application = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, Custom Xero Api Service");
});

app.use("/api/v1", v1Routes);

export default app;
