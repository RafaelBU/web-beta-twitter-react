import User from "../../../domain/User/entities/User";
import mockUsers from "../../mockData/mock_users";
import restoreFollowers from "../builders/restoreFollowers";

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

const fetchFollowers = async () => {
  await sleep(3000);
  return await new Promise((resolve) => {
    const restoredData = mockUsers.map((user) => restoreFollowers(user));
    resolve(restoredData.map((data) => new User(data)));
  });
};

export default fetchFollowers;
