const adaptAddFollowerToUser = ({ follower }) => {
  const { id, name, surname, email, userGender } = follower;

  return {
    id,
    name,
    lastName: surname,
    email,
    gender: userGender,
  };
};

export default adaptAddFollowerToUser;
