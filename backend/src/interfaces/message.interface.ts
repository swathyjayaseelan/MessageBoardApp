export interface NewMessage {
  name: string;
  message: string;
}

export interface Message extends NewMessage {
  id: number;
}
