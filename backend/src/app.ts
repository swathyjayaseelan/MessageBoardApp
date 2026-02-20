import express, { Express, Router } from "express";
import { messagesRouter } from "./routes/messages.router.js";

export const createApp = (router: Router = messagesRouter): Express => {
  const app: Express = express();

  app.use(express.json());
  app.use("/api/messages", router);

  return app;
};
