import restoreMessages from "../builders/restoreMessages";
import { sleep } from "./utils";

const postNewMessage = async ({ payload }) => {
  await sleep(1500);
  const newId = payload[1].id + 1;
  payload[0].id = newId;

  const restoredData = payload.map((message) => restoreMessages(message));

  return new Promise((resolve) => {
    resolve(restoredData);
  });
};

export default postNewMessage;
