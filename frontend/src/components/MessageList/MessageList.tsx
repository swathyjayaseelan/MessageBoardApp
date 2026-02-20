import { useState } from "react";
import { ListGroup, Button } from "react-bootstrap";
import { IMessage } from "@dto/Message";
import "./MessageList.css";
interface MessageListViewProps {
  messages: IMessage[];
  isLoading: boolean;
  error: unknown;
  onAddMessage: () => void;
}

export function MessageList({
  messages,
  isLoading,
  error,
  onAddMessage,
}: MessageListViewProps) {
  return (
    <>
      <div className="container">
        <h1>
          Messages
          <Button
            variant="primary"
            className="float-end m-1 p-2"
            onClick={onAddMessage}
          >
            + Message
          </Button>
        </h1>
        {isLoading && <p>Loading...</p>}

        {!isLoading && error !== null && <p>Error loading messages</p>}

        {!isLoading && messages.length === 0 ? <p>No Messages</p> : null}

        {!isLoading && error === null && messages.length > 0 && (
          <ListGroup variant="flush">
            {messages.map((message) => (
              <ListGroup.Item key={message.id}>
                <div className="ms-2 me-auto">
                  <div className="fw-bold">{message.name}</div>
                  {message.message}
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </div>
    </>
  );
}
