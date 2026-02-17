import { describe, it, expect, beforeEach } from "vitest";
import * as MessageService from "./messages.service.js";

describe("MessageService", () => {
  beforeEach(() => {
    MessageService.reset();
  });

  describe("findAll", () => {
    it("should return an empty array when no messages exist", async () => {
      const messages = await MessageService.findAll();
      expect(messages).toEqual([]);
    });

    it("should return all created messages", async () => {
      await MessageService.create({ name: "John", message: "Hello" });
      await MessageService.create({ name: "Jane", message: "Hi" });

      const messages = await MessageService.findAll();

      expect(messages).toHaveLength(2);
    });
  });

  describe("create", () => {
    it("should create a message with an id", async () => {
      const newMessage = { name: "Test", message: "Test message" };

      const created = await MessageService.create(newMessage);

      expect(created.id).toBeDefined();
      expect(created.name).toBe("Test");
      expect(created.message).toBe("Test message");
    });

    it("should assign unique ids to each message", async () => {
      const message1 = await MessageService.create({ name: "A", message: "1" });
      const message2 = await MessageService.create({ name: "B", message: "2" });

      expect(message1.id).not.toBe(message2.id);
    });
  });

  describe("reset", () => {
    it("should clear all messages", async () => {
      await MessageService.create({ name: "Test", message: "Message" });
      MessageService.reset();

      const messages = await MessageService.findAll();

      expect(messages).toEqual([]);
    });
  });
});
