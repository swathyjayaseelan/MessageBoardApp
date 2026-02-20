import { IMessage, INewMessage } from "@shared/dto/Message";

export type FetchFn = typeof fetch; 
export class MessageService {
  private fetchFn: FetchFn;

  constructor(fetchFn: FetchFn = fetch) {
    this.fetchFn = fetchFn.bind(window);
  }

  async getAll(): Promise<IMessage[]> {
    const response = await this.fetchFn("api/messages");
    return response.json();
  }

  async create(data: INewMessage): Promise<IMessage> {
    const response = await this.fetchFn("/api/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return response.json();
  }
}

export default new MessageService();
