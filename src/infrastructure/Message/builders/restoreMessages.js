import Message from "../../../domain/Message/entitities/Message";

const formatDate = (timestamp) => {
  const date = new Date(timestamp);

  return `${
    date.getMonth() + 1
  }/${date.getDate()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
};

const restoreMessages = (message) => {
  const { id, userFullName, userEmail, dateTimestamp, messageData } = message;
  return new Message({
    id,
    author: userFullName,
    authorEmail: userEmail,
    date: formatDate(dateTimestamp),
    content: messageData,
  });
};

export default restoreMessages;
