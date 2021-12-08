import fetchTimelineMessages from "../../../infrastructure/Message/repositories/fetchTimelineMessages";

const loadTimelineMessages = async () => {
  const messages = await fetchTimelineMessages();
  return messages;
};

export default loadTimelineMessages;
