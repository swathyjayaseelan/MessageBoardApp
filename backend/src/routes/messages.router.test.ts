import { describe, it, expect, beforeEach } from "vitest";
import request from "supertest";
import { createApp } from "../app.js";
import { MessageService } from "../services/message.service.js";
import Database from "better-sqlite3";
import { createMessagesRouter } from "./messages.router.js";
import { initializeDb } from "../database/db.js";

function createTestDb() {
  const db = new Database(":memory:");
  initializeDb(db);
  return db;
}

describe("Messages API", () => {
  let service: MessageService;
  let app: ReturnType<typeof createApp>;
  beforeEach(() => {
    const db = createTestDb();
    service = new MessageService(db);
    const router = createMessagesRouter(service);
    app = createApp(router);
  });

  describe("GET /api/messages", () => {
    it("should return an empty array when no messages exist", async () => {
      const response = await request(app).get("/api/messages");

      expect(response.status).toBe(200);
      expect(response.body).toEqual([]);
    });

    it("should return all messages", async () => {
      await service.create({ name: "John", message: "Hello" });
      await service.create({ name: "Jane", message: "Hi there" });

      const response = await request(app).get("/api/messages");

      expect(response.status).toBe(200);
      expect(response.body).toHaveLength(2);
      expect(response.body[0]).toMatchObject({ name: "Jane", message: "Hi there" });
      expect(response.body[1]).toMatchObject({ name: "John", message: "Hello" });
    });
  });

  describe("POST /api/messages", () => {
    it("should create a new message", async () => {
      const newMessage = { name: "Alice", message: "Test message" };

      const response = await request(app)
        .post("/api/messages")
        .send(newMessage)
        .set("Content-Type", "application/json");

      expect(response.status).toBe(201);
      expect(response.body).toMatchObject(newMessage);
      expect(response.body.id).toBeDefined();
    });

    it("should persist created messages", async () => {
      const newMessage = { name: "Bob", message: "Persistent message" };

      await request(app)
        .post("/api/messages")
        .send(newMessage)
        .set("Content-Type", "application/json");

      const getResponse = await request(app).get("/api/messages");

      expect(getResponse.body).toHaveLength(1);
      expect(getResponse.body[0]).toMatchObject(newMessage);
    });
  });
});
