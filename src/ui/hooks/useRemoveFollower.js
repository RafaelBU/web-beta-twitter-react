import { useEffect } from "react";
import removeFollowerToUser from "../../domain/User/useCases/removeFollowerToUser";

export default function useRemoveFollower({
  meUser,
  isRemovingFollower,
  setIsRemovingFollower,
  oldFollower,
  setNotFollowers,
  setCurrentTimeline,
}) {
  useEffect(() => {
    const removeFollower = async ({ oldFollower }) => {
      try {
        await removeFollowerToUser({
          meUser,
          oldFollower,
        });
        setNotFollowers((prev) => {
          const auxState = [...prev];
          auxState.unshift(oldFollower);
          return auxState;
        });
        setCurrentTimeline((prev) =>
          prev.filter(({ authorEmail }) => authorEmail !== oldFollower.email)
        );
        // setFollowers(response);
      } catch (error) {
        console.log("el error es ", error);
        // setFollowers(followers);
        // setNotFollowers([]);
      } finally {
        setIsRemovingFollower(false);
      }
    };

    if (isRemovingFollower) {
      removeFollower({ oldFollower });
    }
  }, [isRemovingFollower]);
}
