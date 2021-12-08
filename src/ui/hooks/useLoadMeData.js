import { useState, useEffect } from "react";
import loadMeData from "../../domain/User/useCases/loadMeData";

export default function useLoadMeData() {
  const [userIsLoaded, setUserIsLoaded] = useState(false);
  const [meData, setMeData] = useState({});

  useEffect(() => {
    const loadData = async () => {
      try {
        const meData = await loadMeData();
        setMeData(meData);
      } catch (error) {
        setMeData({});
      } finally {
        setUserIsLoaded(true);
      }
    };
    loadData();
  }, []);

  return { userIsLoaded, meData };
}
