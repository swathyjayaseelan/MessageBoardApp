import express, { Request, Response } from "express";
import { IMessage, INewMessage } from "@dto/message.js";
import MessageService from "../services/messages.service.js"; 

export const messagesRouter = express.Router();

// GET route
messagesRouter.get("/", async (req: Request, res: Response) => {
  try {
    const messages: IMessage[] = await MessageService.findAll();

    res.status(200).send(messages);
  } catch (e) {
    res.status(500).send(e);
  }
});

// CREATE Message
messagesRouter.post("/", async (req: Request, res: Response) => {
  try {
    const message: INewMessage = req.body;

    const newMessage = await MessageService.create(message);

    res.status(201).json(newMessage);
  } catch (e) {
    res.status(500).send(e);
  }
});
