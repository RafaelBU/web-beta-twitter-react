import adaptPostNewMessage from "../../../infrastructure/Message/adapters/adaptPostNewMessage";
import postNewMessage from "../../../infrastructure/Message/repositories/postNewMessage";

const postNewMessageToTimeline = async ({
  newMessage,
  currentTimeline,
  meUser,
}) => {
  const adaptedNewMessage = adaptPostNewMessage({
    message: newMessage,
    isNewMessage: true,
  });
  const adaptedTimeline = currentTimeline.map((message) =>
    adaptPostNewMessage({ message, isNewMessage: false })
  );

  const payload = [adaptedNewMessage, ...adaptedTimeline];

  const response = await postNewMessage({ payload });

  meUser.addMessage(response[0]);
  return response;
};

export default postNewMessageToTimeline;
