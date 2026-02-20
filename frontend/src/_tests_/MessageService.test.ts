import { describe, it, expect, vi, beforeEach } from "vitest";
import { MessageService } from "../services/MessageService";

describe("MessageService", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  describe("getAll", () => {
    it("should fetch all messages", async () => {
      const mockMessages = [
        { id: 1, name: "John", message: "Hello" },
        { id: 2, name: "Jane", message: "Hi" },
      ];

      const mockFetch = vi.fn().mockResolvedValue({
        json: () => Promise.resolve(mockMessages),
      });

      const service = new MessageService(mockFetch);
      const result = await service.getAll();

      expect(mockFetch).toHaveBeenCalledWith("api/messages");
      expect(result).toEqual(mockMessages);
    });
  });

  describe("create", () => {
    it("should create a new message", async () => {
      const newMessage = { name: "John", message: "Hello" };
      const createdMessage = { id: 1, ...newMessage };

      const mockFetch = vi.fn().mockResolvedValue({
        json: () => Promise.resolve(createdMessage),
      });

      const service = new MessageService(mockFetch);
      const result = await service.create(newMessage);

      expect(mockFetch).toHaveBeenCalledWith("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newMessage),
      });
      expect(result).toEqual(createdMessage);
    });
  });
});
