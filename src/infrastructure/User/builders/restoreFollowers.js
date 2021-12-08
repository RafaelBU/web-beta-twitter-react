import User from "../../../domain/User/entities/User";

const restoreFollowers = (mockUsers) =>
  new User({
    id: mockUsers.id,
    name: mockUsers.name,
    surname: mockUsers.lastName,
    messages: [],
    followers: [],
  });

export default restoreFollowers;
