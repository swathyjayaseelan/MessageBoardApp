import { IMessage, INewMessage } from "@dto/message.js";
import db from "../database/db.js";

class MessageService {
  async findAll(): Promise<IMessage[]> {
    const stmt = db.prepare(
      "SELECT id, name, message FROM messages ORDER BY id DESC",
    );
    return stmt.all() as IMessage[];
  }

  async create(newMessage: INewMessage): Promise<IMessage> {
    const stmt = db.prepare(
      "INSERT INTO messages (name, message) VALUES (?, ?)",
    );
    const result = stmt.run(newMessage.name, newMessage.message);

    return {
      id: result.lastInsertRowid as number,
      ...newMessage,
    };
  }

  reset(): void {
    db.exec("DELETE FROM messages");
  }
}

export default new MessageService();
