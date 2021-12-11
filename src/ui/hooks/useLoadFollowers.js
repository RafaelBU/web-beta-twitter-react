import { useState, useEffect } from "react";
import User from "../../domain/User/entities/User";
import loadFollowersAction from "../../domain/User/useCases/loadFollowersAction";

export default function useLoadFollowers() {
  const [isLoadingUsers, setIsLoadingUsers] = useState(true);
  // const [followers, setFollowers] = useState([]);
  const [notFollowers, setNotFollowers] = useState([]);
  const [meUser, setMeUser] = useState(new User({}));

  useEffect(() => {
    const loadFollowers = async () => {
      try {
        setIsLoadingUsers(true);
        const { followers, meData } = await loadFollowersAction();
        setMeUser(meData);
        // setFollowers(meData.followers);
        setNotFollowers(followers.filter((_item, id) => id >= 5));
      } catch (error) {
        // setFollowers([]);
        console.log("el error es ", error);
      } finally {
        setIsLoadingUsers(false);
      }
    };

    loadFollowers();
  }, []);

  return {
    meUser,
    isLoadingUsers,
    // followers,
    notFollowers,
    // setFollowers,
    setNotFollowers,
  };
}
