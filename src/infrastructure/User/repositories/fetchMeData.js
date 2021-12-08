import User from "../../../domain/User/entities/User";
import { sleep } from "../../Message/repositories/utils";

const fetchMeData = async () => {
  await sleep(1000);
  return await new Promise((resolve) => {
    resolve(
      new User({
        id: 0,
        name: "Rafael",
        surname: "Buzón Urbano",
        messages: [],
        followers: [],
      })
    );
  });
};

export default fetchMeData;
