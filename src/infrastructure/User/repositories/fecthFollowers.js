import { sleep } from "../../Message/repositories/utils";

import mockUsers from "../../mockData/mock_users";
import restoreFollowers from "../builders/restoreFollowers";

const fetchFollowers = async () => {
  await sleep(3000);
  return await new Promise((resolve) => {
    const restoredFollowers = mockUsers.map((user) => restoreFollowers(user));

    resolve(restoredFollowers);
  });
};

export default fetchFollowers;
