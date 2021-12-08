import fetchMeData from "../../../infrastructure/User/repositories/fetchMeData";

const loadMeData = async () => {
  return await fetchMeData();
};

export default loadMeData;
