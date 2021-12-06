import { useState, useEffect } from "react";
import loadFollowersAction from "../../domain/User/useCases/loadFollowersAction";

export default function useLoadFollowers() {
  const [isLoading, setIsLoading] = useState(true);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    const loadFollowers = async () => {
      try {
        setIsLoading(true);
        const followers = await loadFollowersAction();
        setFollowers(followers.filter((_item, id) => id < 4));
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
  };
}
