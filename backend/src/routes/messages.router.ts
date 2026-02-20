import express, { Request, Response, Router } from "express";
import { IMessage, INewMessage } from "@dto/Message.dto.js";
import DefaultMessageService, { MessageService } from "../services/message.service.js";

export function createMessagesRouter(messageService: MessageService): Router {
  const router = express.Router();
  router.get("/", async (req: Request, res: Response) => {
    try {
      const messages: IMessage[] = await messageService.findAll();

      res.status(200).send(messages);
    } catch (e) {
      res.status(500).send(e);
    }
  });

  router.post("/", async (req: Request, res: Response) => {
    try {
      const message: INewMessage = req.body;

      const newMessage = await messageService.create(message);

      res.status(201).json(newMessage);
    } catch (e) {
      res.status(500).send(e);
    }
  });
  return router;
}

export const messagesRouter = createMessagesRouter(DefaultMessageService);
