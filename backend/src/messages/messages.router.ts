import express, { Request, Response } from "express";
import { Message, NewMessage } from "../interfaces/message.interface.js";
import * as MessageService from "./messages.service.js";

export const messagesRouter = express.Router();

// GET route
messagesRouter.get("/", async (req: Request, res: Response) => {
  try {
    const messages: Message[] = await MessageService.findAll();

    res.status(200).send(messages);
  } catch (e) {
    res.status(500).send(e);
  }
});

// CREATE Message
messagesRouter.post("/", async (req: Request, res: Response) => {
  try {
    const message: NewMessage = req.body;

    const newMessage = await MessageService.create(message);

    res.status(201).json(newMessage);
  } catch (e) {
    res.status(500).send(e);
  }
});
