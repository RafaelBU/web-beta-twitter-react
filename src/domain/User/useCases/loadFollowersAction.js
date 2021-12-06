import fetchFollowers from "../../../infrastructure/User/repositories/fecthFollowers";

const loadFollowersAction = async () => {
  return await fetchFollowers();
};

export default loadFollowersAction;
