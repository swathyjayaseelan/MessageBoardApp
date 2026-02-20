import { INewMessage } from "../../../dto/Message";

const getAll = async () => {
  const response = await fetch("api/messages");
  const data = await response.json();
  return data;
};

const create = async (data: INewMessage) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  const response = await fetch("/api/messages", requestOptions);
  const result = await response.json();
  return result;
};

const MessageService = {
  getAll,
  create,
};

export default MessageService;
