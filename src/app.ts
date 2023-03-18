import express from "express";
import cors from "cors";
import { loadEnv } from "./configs";

loadEnv();

const app = express();
app
  .use(cors())
  .use(express.json())
  .get("/health", (_req, res) => res.send("OK!"));

export default app;
