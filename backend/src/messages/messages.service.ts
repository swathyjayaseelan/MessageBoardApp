import { Message, NewMessage } from "./message.interface.js";
import { Messages } from "./messages.interface.js";

// Store the messages in a local object
let messages: Messages = {};

// Get all messages
export const findAll = async (): Promise<Message[]> => Object.values(messages);

// Add new message into the object
export const create = async (newMessage: NewMessage): Promise<Message> => {
  // Unique value for id
  const id = new Date().valueOf();

  messages[id] = {
    id,
    ...newMessage,
  };

  return messages[id];
};
