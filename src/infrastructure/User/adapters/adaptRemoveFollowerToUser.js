const adaptRemoveFollowerToUser = ({ follower }) => {
  const { id, name, surname, email, userGender } = follower;

  return {
    id,
    name,
    lastName: surname,
    email,
    gender: userGender,
  };
};

export default adaptRemoveFollowerToUser;
