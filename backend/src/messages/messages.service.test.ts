import { describe, it, expect, beforeEach, vi } from "vitest";
import * as MessagesService from "./messages.service.js";

vi.mock("../database/db.js", () => {
  const Database = require("better-sqlite3");
  const db = new Database(":memory:");
  db.exec(`                                                                                                                                                                                                         
      CREATE TABLE IF NOT EXISTS messages (                                                                                                                                                                           
        id INTEGER PRIMARY KEY AUTOINCREMENT,                                                                                                                                                                         
        name TEXT NOT NULL,                                                                                                                                                                                           
        message TEXT NOT NULL                                                                                                                                                                                         
      )                                                                                                                                                                                                               
    `);
  return { default: db };
});

describe("MessageService", () => {
  beforeEach(() => {
    MessagesService.reset();
  });

  describe("findAll", () => {
    it("should return an empty array when no messages exist", async () => {
      const messages = await MessagesService.findAll();
      expect(messages).toEqual([]);
    });

    it("should return all created messages", async () => {
      await MessagesService.create({ name: "John", message: "Hello" });
      await MessagesService.create({ name: "Jane", message: "Hi" });

      const messages = await MessagesService.findAll();

      expect(messages).toHaveLength(2);
    });
  });

  describe("create", () => {
    it("should create a message with an id", async () => {
      const newMessage = { name: "Test", message: "Test message" };

      const created = await MessagesService.create(newMessage);

      expect(created.id).toBeDefined();
      expect(created.name).toBe("Test");
      expect(created.message).toBe("Test message");
    });

    it("should assign unique ids to each message", async () => {
      const message1 = await MessagesService.create({
        name: "A",
        message: "1",
      });
      const message2 = await MessagesService.create({
        name: "B",
        message: "2",
      });

      expect(message1.id).not.toBe(message2.id);
    });
  });

  describe("reset", () => {
    it("should clear all messages", async () => {
      await MessagesService.create({ name: "Test", message: "Message" });
      MessagesService.reset();

      const messages = await MessagesService.findAll();

      expect(messages).toEqual([]);
    });
  });
});
