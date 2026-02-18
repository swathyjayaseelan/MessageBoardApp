import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import MessageService from "../../services/MessageService";

interface Props {
  showModal: boolean;
  handleClose: any;
}

export function NewMessageFormModal(props: Props) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const onsubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    return MessageService.create({
      name: name,
      message: message,
    }).then(() => {
      setName("");
      setMessage("");
      props.handleClose();
    });
  };

  return (
    <>
      <Modal show={props.showModal} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onsubmit}>
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
            <Button variant="secondary" onClick={props.handleClose}>
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
};