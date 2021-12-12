import { useState, useEffect } from "react";
import User from "../../domain/User/entities/User";
import loadFollowersAction from "../../domain/User/useCases/loadFollowersAction";

export default function useLoadFollowers() {
  const [isLoadingUsers, setIsLoadingUsers] = useState(true);
  const [notFollowers, setNotFollowers] = useState([]);
  const [meUser, setMeUser] = useState(new User({}));

  useEffect(() => {
    const loadFollowers = async () => {
      try {
        setIsLoadingUsers(true);
        const { followers, meData } = await loadFollowersAction();
        setMeUser(meData);
        setNotFollowers(followers.filter((_item, id) => id >= 5));
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoadingUsers(false);
      }
    };

    loadFollowers();
  }, []);

  return {
    meUser,
    isLoadingUsers,
    notFollowers,
    setNotFollowers,
  };
}
