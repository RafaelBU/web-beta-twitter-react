import { useState, useEffect } from "react";
import postNewMessageToTimeline from "../../domain/Message/useCases/postNewMessageToTimeline";

export default function usePostNewMessage({
  meUser,
  isUpdatingTimeline,
  setIsUpdatingTimeline,
  newMessage,
  currentTimeline,
  setCurrentTimeline,
}) {
  const [isPostingNewMessage, setIsPostingNewMessage] = useState(false);

  useEffect(() => {
    const postMessage = async ({ newMessage }) => {
      try {
        setIsPostingNewMessage(true);
        const response = await postNewMessageToTimeline({
          newMessage,
          currentTimeline,
          meUser,
        });
        setCurrentTimeline(response);
      } catch (error) {
        setCurrentTimeline(currentTimeline);
      } finally {
        setIsPostingNewMessage(false);
        setIsUpdatingTimeline(false);
      }
    };

    if (isUpdatingTimeline) {
      postMessage({ newMessage });
    }
  }, [isUpdatingTimeline]);

  return {
    isPostingNewMessage,
  };
}
