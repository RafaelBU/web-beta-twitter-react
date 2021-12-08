import adaptPostNewMessage from "../../../infrastructure/Message/adapters/adaptPostNewMessage";
import postNewMessage from "../../../infrastructure/Message/repositories/postNewMessage";

const postNewMessageToTimeline = async ({ newMessage, currentTimeline }) => {
  const adaptedNewMessage = adaptPostNewMessage({
    message: newMessage,
    isNewMessage: true,
  });
  const adaptedTimeline = currentTimeline.map((message) =>
    adaptPostNewMessage({ message, isNewMessage: false })
  );

  const payload = [adaptedNewMessage, ...adaptedTimeline];

  const response = await postNewMessage({ payload });
  return response;
};

export default postNewMessageToTimeline;
