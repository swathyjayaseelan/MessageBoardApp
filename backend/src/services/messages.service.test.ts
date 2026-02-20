import { describe, it, expect, beforeEach } from "vitest";
import { MessageService } from "./message.service.js";
import Database from "better-sqlite3";
import { initializeDb } from "../database/db.js";

function createTestDb() {
  const db = new Database(":memory:");
  initializeDb(db);
  return db;
}

describe("MessageService", () => {
  let db: Database.Database;
  let service: MessageService;
  beforeEach(() => {
    db = createTestDb();
    service = new MessageService(db);
  });

  describe("findAll", () => {
    it("should return an empty array when no messages exist", async () => {
      const messages = await service.findAll();
      expect(messages).toEqual([]);
    });

    it("should return all created messages", async () => {
      await service.create({ name: "John", message: "Hello" });
      await service.create({ name: "Jane", message: "Hi" });

      const messages = await service.findAll();

      expect(messages).toHaveLength(2);
    });
  });

  describe("create", () => {
    it("should create a message with an id", async () => {
      const newMessage = { name: "Test", message: "Test message" };

      const created = await service.create(newMessage);

      expect(created.id).toBeDefined();
      expect(created.name).toBe("Test");
      expect(created.message).toBe("Test message");
    });

    it("should assign unique ids to each message", async () => {
      const message1 = await service.create({
        name: "A",
        message: "1",
      });
      const message2 = await service.create({
        name: "B",
        message: "2",
      });

      expect(message1.id).not.toBe(message2.id);
    });
  });

  describe("reset", () => {
    it("should clear all messages", async () => {
      await service.create({ name: "Test", message: "Message" });
      service.reset();

      const messages = await service.findAll();

      expect(messages).toEqual([]);
    });
  });
});
