import { useEffect } from "react";
import addFollowerToUser from "../../domain/User/useCases/addFollowerToUser";

export default function useAddFollower({
  meUser,
  isAddingFollower,
  setIsAddingFollower,
  newFollower,
  setNotFollowers,
  setCurrentTimeline,
  setFullTimeline,
}) {
  const updateTimeline = (timeline) => {
    newFollower.messages.forEach((message) => timeline.push(message));
    const sortedMessages = timeline.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    return sortedMessages;
  };

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
          return updateTimeline(auxState);
        });
        setFullTimeline((prev) => {
          const auxState = [...prev];
          return updateTimeline(auxState);
        });
      } catch (error) {
        console.error(error);
      } finally {
        setIsAddingFollower(false);
      }
    };

    if (isAddingFollower) {
      addFollower({ newFollower, currentFollowers: meUser.followers });
    }
  }, [isAddingFollower]);
}
