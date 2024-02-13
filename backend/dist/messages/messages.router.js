var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
import * as MessageService from "./messages.service.js";
export const messagesRouter = express.Router();
messagesRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const messages = yield MessageService.findAll();
        res.status(200).send(messages);
    }
    catch (e) {
        res.status(500).send(e);
    }
}));
messagesRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const message = req.body;
        const newMessage = yield MessageService.create(message);
        res.status(201).json(newMessage);
    }
    catch (e) {
        res.status(500).send(e);
    }
}));
//# sourceMappingURL=messages.router.js.map