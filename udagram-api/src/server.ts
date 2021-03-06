import * as dotenv from "dotenv";
import cors from "cors";
import express from "express";
import { sequelize } from "./sequelize";

import { IndexRouter } from "./controllers/v0/index.router";

import bodyParser from "body-parser";
import { V0_FEED_MODELS, V0_USER_MODELS } from "./controllers/v0/model.index";


  dotenv.config();

  sequelize.addModels(V0_FEED_MODELS);
  sequelize.addModels(V0_USER_MODELS);
  sequelize.sync();

  console.log("Database Connected");

  const app = express();
  const port = process.env.PORT;

  app.use(bodyParser.json());

  app.use(cors()); 

  app.use("/api/v0/", IndexRouter);
  
  // Root URI call
  app.get("/", async (req, res) => {
    res.send("/api/v0/");
  });

  // Start the Server
  app.listen(port, () => {
    console.log(`server running ${port}/`);
    console.log(`press CTRL+C to stop server`);
  });
  
  export default app;
