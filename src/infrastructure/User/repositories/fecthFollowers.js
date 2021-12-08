import { sleep } from "../../Message/repositories/utils";
import mockUsers from "../../mockData/mock_users";
import restoreFollowers from "../builders/restoreFollowers";

const fetchFollowers = async () => {
  await sleep(3000);
  return await new Promise((resolve) => {
    const restoredData = mockUsers.map((user) => restoreFollowers(user));
    resolve(restoredData);
  });
};

export default fetchFollowers;
