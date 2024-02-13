import { INewMessage } from "../components/Message.type";

// GET api/messages
const getAll = () => {
  return fetch("api/messages")
    .then((response) => response.json())
    .then((data) => data);
};

// POST /api/messages
const create = (data: INewMessage) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  return fetch("/api/messages", requestOptions)
    .then((response) => response.json())
    .then((data) => data);
};

const MessageService = {
  getAll,
  create,
};

export default MessageService;
