import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MessageList } from "./MessageList";

describe("MessageList", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should display 'No Messages' when list is empty", async () => {
    render(<MessageList messages={[]} isLoading={false} error={null} onAddMessage={() => {}} />);

    await waitFor(() => {
      expect(screen.getByText("No Messages")).toBeInTheDocument();
    });
  });

  it("should display loading state", () => {
    render(<MessageList messages={[]} isLoading={true} error={null} onAddMessage={() => {}} />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("should display error state", () => {
    render(
      <MessageList
        messages={[]}
        isLoading={false}
        error={new Error("Failed")}
        onAddMessage={() => {}}
      />
    );

    expect(screen.getByText("Error loading messages")).toBeInTheDocument();
  });

  it("should display messages when available", () => {
    const messages = [
      { id: 1, name: "John", message: "Hello world" },
      { id: 2, name: "Jane", message: "Hi there" },
    ];

    render(
      <MessageList messages={messages} isLoading={false} error={null} onAddMessage={() => {}} />
    );

    expect(screen.getByText("John")).toBeInTheDocument();
    expect(screen.getByText("Hello world")).toBeInTheDocument();
    expect(screen.getByText("Jane")).toBeInTheDocument();
    expect(screen.getByText("Hi there")).toBeInTheDocument();
  });

  it("should call onAddMessage when '+ Message' button is clicked", async () => {
    const onAddMessage = vi.fn();
    const user = userEvent.setup();

    render(
      <MessageList messages={[]} isLoading={false} error={null} onAddMessage={onAddMessage} />
    );

    await user.click(screen.getByText("+ Message"));

    expect(onAddMessage).toHaveBeenCalled();
  });
});
