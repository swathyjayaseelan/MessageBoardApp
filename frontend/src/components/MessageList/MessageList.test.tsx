import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MessageService from "../../services/MessageService";
import { MessageList } from "./MessageList";

vi.mock("../../services/MessageService", () => ({
  default: {
    getAll: vi.fn(),
    create: vi.fn(),
  },
}));

describe("MessageList", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("should display 'No Messages' when list is empty", async () => {
    vi.mocked(MessageService.getAll).mockResolvedValue([]);

    render(<MessageList />);

    await waitFor(() => {
      expect(screen.getByText("No Messages")).toBeInTheDocument();
    });
  });

  it("should display messages when available", async () => {
    const mockMessages = [
      { id: 1, name: "John", message: "Hello world" },
      { id: 2, name: "Jane", message: "Hi there" },
    ];
    vi.mocked(MessageService.getAll).mockResolvedValue(mockMessages);

    render(<MessageList />);

    await waitFor(() => {
      expect(screen.getByText("John")).toBeInTheDocument();
      expect(screen.getByText("Hello world")).toBeInTheDocument();
      expect(screen.getByText("Jane")).toBeInTheDocument();
      expect(screen.getByText("Hi there")).toBeInTheDocument();
    });
  });

  it("should open modal when '+ Message' button is clicked", async () => {
    vi.mocked(MessageService.getAll).mockResolvedValue([]);
    const user = userEvent.setup();

    render(<MessageList />);

    await user.click(screen.getByText("+ Message"));

    await waitFor(() => {
      expect(screen.getByText("Add a new message")).toBeInTheDocument();
    });
  });
});
