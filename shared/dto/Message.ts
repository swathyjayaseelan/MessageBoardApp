export interface IMessage {
  id: number;
  name: string;
  message: string;
}

export interface INewMessage extends Omit<IMessage, "id"> {}
