import { useEffect } from "react";
import addFollowerToUser from "../../domain/User/useCases/addFollowerToUser";

export default function useAddFollower({
  meUser,
  isAddingFollower,
  setIsAddingFollower,
  // followers,
  newFollower,
  // setFollowers,
  setNotFollowers,
  setCurrentTimeline,
}) {
  useEffect(() => {
    const addFollower = async ({ newFollower, currentFollowers }) => {
      try {
        await addFollowerToUser({
          meUser,
          newFollower,
          currentFollowers,
        });
        setNotFollowers((prev) =>
          prev.filter((item) => item.id !== newFollower.id)
        );

        setCurrentTimeline((prev) => {
          const auxState = [...prev];
          newFollower.messages.forEach((message) => auxState.push(message));
          return auxState;
        });
        // setFollowers(response);
      } catch (error) {
        console.log("el error es ", error);
        // setFollowers(followers);
        setNotFollowers([]);
      } finally {
        setIsAddingFollower(false);
      }
    };

    if (isAddingFollower) {
      addFollower({ newFollower, currentFollowers: meUser.followers });
    }
  }, [isAddingFollower]);
}
