export interface INewMessage {
  name: string;
  message: string;
}

export interface IMessage extends INewMessage {
  id: number;
  name: string;
  message: string;
}
