import express, { Express } from "express";
import { messagesRouter } from "./messages/messages.router.js";

const port = 8000;

const app: Express = express();

app.use(express.json());
app.use("/api/messages", messagesRouter);

app.listen(port, () => {
  console.log("now listening in 8000");
});
