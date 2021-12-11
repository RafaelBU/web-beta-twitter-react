import { useState, useEffect } from "react";
import loadMeData from "../../domain/User/useCases/loadMeData";

export default function useLoadMeData() {
  const [userIsLoading, setUserIsLoading] = useState(true);
  const [meData, setMeData] = useState({});

  useEffect(() => {
    const loadData = async () => {
      try {
        const meData = await loadMeData();
        setMeData(meData);
      } catch (error) {
        setMeData({});
      } finally {
        setUserIsLoading(false);
      }
    };
    loadData();
  }, []);

  return { userIsLoading, meData };
}
