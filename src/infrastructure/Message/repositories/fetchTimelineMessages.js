import mockMessages from "../../mockData/mock_messages";
import restoreMessages from "../builders/restoreMessages";
import { sleep } from "./utils";

const fetchTimelineMessages = async () => {
  await sleep(3000);
  return await new Promise((resolve) => {
    const restoredData = mockMessages.map((user) => restoreMessages(user));
    resolve(restoredData);
  });
};

export default fetchTimelineMessages;
