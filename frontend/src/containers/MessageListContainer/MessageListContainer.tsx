import { useState } from "react";
import { MessageList } from "../../components/MessageList/MessageList";
import { NewMessageFormModal } from "../../components/NewMessageFormModal/NewMessageFormModal";
import { useMessages } from "../../hooks/getMessages";

export function MessageListContainer() {
  const [showModal, setShowModal] = useState(false);
  const { messages, isLoading, error, refetch } = useMessages();

  return (
    <>
      <MessageList
        messages={messages}
        isLoading={isLoading}
        error={error}
        onAddMessage={() => setShowModal(true)}
      />

      <NewMessageFormModal
        showModal={showModal}
        handleClose={() => setShowModal(false)}
        onMessageCreated={refetch}
      />
    </>
  );
}
