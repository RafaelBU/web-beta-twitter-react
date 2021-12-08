const adaptPostNewMessage = ({ message, isNewMessage = false }) => {
  const { id, authorEmail, author, date, content } = message;
  return {
    id: isNewMessage ? null : id,
    userEmail: isNewMessage ? "rafael.buzon@email.com" : authorEmail,
    userFullName: isNewMessage ? "Rafael Buzón Urbano" : author,
    dateTimestamp: isNewMessage
      ? new Date().getTime()
      : new Date(date).getTime(),
    messageData: isNewMessage ? message : content,
  };
};

export default adaptPostNewMessage;
