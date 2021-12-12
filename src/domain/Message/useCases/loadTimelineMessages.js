import fetchTimelineMessages from "../../../infrastructure/Message/repositories/fetchTimelineMessages";

const loadTimelineMessages = async () => {
  const messages = await fetchTimelineMessages();
  return messages.filter((_item, index) => index <= 4);
};

export default loadTimelineMessages;
