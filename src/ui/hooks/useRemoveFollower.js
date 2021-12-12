import { useEffect } from "react";
import removeFollowerToUser from "../../domain/User/useCases/removeFollowerToUser";

export default function useRemoveFollower({
  meUser,
  isRemovingFollower,
  setIsRemovingFollower,
  oldFollower,
  setNotFollowers,
  setCurrentTimeline,
  setFullTimeline,
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
        setFullTimeline((prev) =>
          prev.filter(({ authorEmail }) => authorEmail !== oldFollower.email)
        );
      } catch (error) {
        console.error(error);
      } finally {
        setIsRemovingFollower(false);
      }
    };

    if (isRemovingFollower) {
      removeFollower({ oldFollower });
    }
  }, [isRemovingFollower]);
}
