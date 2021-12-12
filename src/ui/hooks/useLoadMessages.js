import { useState, useEffect } from "react";
import loadTimelineMessages from "../../domain/Message/useCases/loadTimelineMessages";

export default function useLoadMessages() {
  const [messages, setMessages] = useState([]);
  const [isLoadingMessages, setIsLoadingMessages] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const messages = await loadTimelineMessages();
        setMessages(messages);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoadingMessages(false);
      }
    };
    loadData();
  }, []);

  return {
    isLoadingMessages,
    messages,
  };
}
