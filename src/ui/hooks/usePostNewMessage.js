import { useState, useEffect } from "react";
import postNewMessageToTimeline from "../../domain/Message/useCases/postNewMessageToTimeline";

export default function usePostNewMessage({
  meUser,
  isUpdatingTimeline,
  setIsUpdatingTimeline,
  newMessage,
  currentTimeline,
  setCurrentTimeline,
  setFullTimeline,
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
        setFullTimeline(response);
      } catch (error) {
        console.error(error);
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
