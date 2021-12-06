import { useState, useEffect } from "react";
import loadFollowersAction from "../../domain/User/useCases/loadFollowersAction";

export default function useLoadFollowers() {
  const [isLoading, setIsLoading] = useState(true);
  const [followers, setFollowers] = useState([]);
  const [notFollowers, setNotFollowers] = useState([]);

  useEffect(() => {
    const loadFollowers = async () => {
      try {
        setIsLoading(true);
        const followers = await loadFollowersAction();
        setFollowers(followers.filter((_item, id) => id < 500));
        setNotFollowers(followers.filter((_item, id) => id >= 500));
      } catch (error) {
        setFollowers([]);
      } finally {
        setIsLoading(false);
      }
    };
    loadFollowers();
  }, []);

  return {
    isLoading,
    followers,
    notFollowers,
  };
}
