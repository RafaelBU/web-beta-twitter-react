import User from "../../../domain/User/entities/User";

const restoreFollowers = (mockUser) => {
  const { id, name, lastName, email, gender } = mockUser;

  return new User({
    id,
    name,
    surname: lastName,
    email,
    messages: [],
    followers: [],
    userGender: gender,
  });
};

export default restoreFollowers;
