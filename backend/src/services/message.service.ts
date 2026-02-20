import { IMessage, INewMessage } from "@dto/Message.dto.js";
import db from "../database/db.js";
import Database from "better-sqlite3";

export class MessageService {
  constructor(private db: Database.Database) {}
  
  async findAll(): Promise<IMessage[]> {
    const stmt = this.db.prepare(
      "SELECT id, name, message FROM messages ORDER BY id DESC",
    );
    return stmt.all() as IMessage[];
  }

  async create(newMessage: INewMessage): Promise<IMessage> {
    const stmt =this.db.prepare(
      "INSERT INTO messages (name, message) VALUES (?, ?)",
    );
    const result = stmt.run(newMessage.name, newMessage.message);

    return {
      id: result.lastInsertRowid as number,
      ...newMessage,
    };
  }

  reset(): void {
    this.db.exec("DELETE FROM messages");
  }
}

export default new MessageService(db);
