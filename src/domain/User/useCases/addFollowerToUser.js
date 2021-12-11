import adaptAddFollowerToUser from "../../../infrastructure/User/adapters/adaptAddFollowerToUser";
import postFollowerToUser from "../../../infrastructure/User/repositories/postFollowerToUser";

const addFollowerToUser = async ({ meUser, newFollower, currentFollowers }) => {
  const adaptedNewFollower = adaptAddFollowerToUser({ follower: newFollower });
  const adaptedCurrentFollowers = currentFollowers.map((item) =>
    adaptAddFollowerToUser({ follower: item })
  );

  const payload = [adaptedNewFollower, ...adaptedCurrentFollowers];

  meUser.addFollower(newFollower);

  const response = await postFollowerToUser({ payload });

  return response;
};

export default addFollowerToUser;
