import { sleep } from "../../Message/repositories/utils";
import restoreFollowers from "../builders/restoreFollowers";

const postFollowerToUser = async ({ payload }) => {
  await sleep(1000);
  const restoredData = payload.map((follower) => restoreFollowers(follower));
  return new Promise((resolve) => resolve(restoredData));
};

export default postFollowerToUser;
