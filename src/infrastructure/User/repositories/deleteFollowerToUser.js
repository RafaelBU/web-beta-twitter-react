import { sleep } from "../../Message/repositories/utils";
import restoreFollowers from "../builders/restoreFollowers";

const deleteFollowerToUser = async ({ payload }) => {
  await sleep(1000);
  const restoredData = restoreFollowers(payload);
  return new Promise((resolve) => resolve(restoredData));
};

export default deleteFollowerToUser;
