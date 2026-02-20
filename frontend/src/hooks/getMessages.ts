import { useEffect, useState, useCallback } from "react";
import type { IMessage } from "@shared/dto/Message";
import DefaultMessageService, {
  MessageService,
} from "../services/MessageService";

export function useMessages(
  messageService: MessageService = DefaultMessageService,
) {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  const fetchMessages = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await messageService.getAll();
      setMessages(data);
    } catch (e) {
      setError(e);
      throw e;
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]);

  return { messages, isLoading, error, refetch: fetchMessages };
}
