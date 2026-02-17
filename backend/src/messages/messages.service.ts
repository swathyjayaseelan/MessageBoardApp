import { Message, NewMessage } from "./message.interface.js";
import { Messages } from "./messages.interface.js";

// Store the messages in a local object
let messages: Messages = {};
let nextId = 1;

export const findAll = async (): Promise<Message[]> => Object.values(messages);

export const create = async (newMessage: NewMessage): Promise<Message> => {
  const id = nextId++;

  messages[id] = {
    id,
    ...newMessage,
  };

  return messages[id];
};

export const reset = (): void => {
  messages = {};
  nextId = 1;
};
