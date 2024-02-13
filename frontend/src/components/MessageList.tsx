import { useEffect, useState } from "react";
import AddMessageFormModal from "./AddMessageFormModal";
import { ListGroup, Button } from "react-bootstrap";
import MessageService from "../services/MessageService";
import { IMessage } from "./Message.type.js";
import "./MessageList.css";

function MessageList() {
  const [showModal, setShowModal] = useState(false);
  const [messages, setMessages] = useState([] as IMessage[]);

  const handleCloseModal = () => {
    fetchData();
    setShowModal(false);
  };
  const handleShowModal = () => setShowModal(true);

  const fetchData = () => {
    return MessageService.getAll().then((data) => {
      setMessages(data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="container">
        <h1>
          Messages
          <Button
            variant="primary"
            className="float-end m-1 p-2"
            onClick={handleShowModal}
          >
            + Message
          </Button>
        </h1>
        {messages.length === 0 ? <p>No Messages</p> : null}

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
      </div>

      <AddMessageFormModal
        showModal={showModal}
        handleClose={handleCloseModal}
      ></AddMessageFormModal>
    </>
  );
}

export default MessageList;
