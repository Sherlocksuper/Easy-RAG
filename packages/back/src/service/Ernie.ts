import { RawMessage } from "../../../public/index.js";
import {ernieInstance} from "../models/index.js";

export const getMessageAnswer = (message:RawMessage) => {
  ernieInstance.getMessageAnswer(message.message)
}

getMessageAnswer({
  message: "你好！"
})
