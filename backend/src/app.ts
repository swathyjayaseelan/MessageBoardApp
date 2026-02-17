import express, { Express } from "express";
import { messagesRouter } from "./messages/messages.router.js";

export const createApp = (): Express => {
  const app: Express = express();

  app.use(express.json());
  app.use("/api/messages", messagesRouter);

  return app;
};
