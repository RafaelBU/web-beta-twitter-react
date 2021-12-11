import restoreMessages from "../../../infrastructure/Message/builders/restoreMessages";
import fetchFollowers from "../../../infrastructure/User/repositories/fecthFollowers";
import mockMessages from "../../../infrastructure/mockData/mock_messages";
import User from "../entities/User";

const loadFollowersAction = async () => {
  const followers = await fetchFollowers();
  followers
    .filter((_item, index) => index < 5)
    .forEach((follower, index) =>
      follower.addMessage(restoreMessages(mockMessages[index]))
    );

  const filterFollowers = followers.filter((_item, id) => id < 5);

  const meData = new User({
    id: 0,
    name: "Rafael",
    surname: "Buzón Urbano",
    userGender: "Male",
    email: "rafael.buzon@email.com",
    followers: filterFollowers,
    messages: [],
  });

  return { followers, meData };
};

export default loadFollowersAction;
