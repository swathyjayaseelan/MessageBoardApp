import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import MessageService from "../../services/MessageService";

interface Props {
  showModal: boolean;
  handleClose: any;
  onMessageCreated: () => void;
}

export function NewMessageFormModal({ showModal, handleClose, onMessageCreated }: Props) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await MessageService.create({
      name: name,
      message: message,
    });
    setName("");
    setMessage("");
    onMessageCreated();
    handleClose();
  };

  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                as="textarea"
                rows={3}
              />
            </Form.Group>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              disabled={name === "" || message === ""}
              style={{ margin: "5px" }}
              variant="primary"
              type="submit"
            >
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
