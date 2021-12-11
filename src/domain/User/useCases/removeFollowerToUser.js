import adaptRemoveFollowerToUser from "../../../infrastructure/User/adapters/adaptRemoveFollowerToUser";
import deleteFollowerToUser from "../../../infrastructure/User/repositories/deleteFollowerToUser";

const removeFollowerToUser = async ({ meUser, oldFollower }) => {
  const payload = adaptRemoveFollowerToUser({ follower: oldFollower });

  meUser.removeFollower(oldFollower);

  const response = await deleteFollowerToUser({ payload });

  return response;
};

export default removeFollowerToUser;
