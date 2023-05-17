import express from "express";
import DbConect from "./database/mongodb";
import { router } from "./routes/router";
import * as dotenv from "dotenv";
dotenv.config();

async function Bootstrap() {
  const app = express();
  app.use(express.json());

  await DbConect();
  app.use(router);
  const Door = 3000;
  app.listen(Door, () => {
    console.log(`HTTP server running ${Door}`);
  });
}
Bootstrap();
