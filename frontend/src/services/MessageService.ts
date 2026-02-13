import { INewMessage } from "../interfaces/Message";

// GET api/messages
const getAll = async () => {
  const response = await fetch("api/messages");
  const data = await response.json();
  return data;
};

// POST /api/messages
const create = async (data: INewMessage) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  const response = await fetch("/api/messages", requestOptions);
  const data_1 = await response.json();
  return data_1;
};

const MessageService = {
  getAll,
  create,
};

export default MessageService;
