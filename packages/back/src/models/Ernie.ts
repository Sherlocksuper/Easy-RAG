import {IModel} from "@clients/index";
import {ChatCompletion} from "@baiducloud/qianfan";
import {ISystemEnv, systemEnv} from "../../config.js";

export enum ErnieChildType {
  BERT = "Bert",
  ELMO = "Elmo",
  COOKIE_MONSTER = "Cookie Monster",
  GROVER = "Grover"
}

class Ernie implements IModel {
  client = undefined;
  childTypes: ErnieChildType[] = Object.values(ErnieChildType);

  constructor(systemEnv: ISystemEnv) {
    console.log(systemEnv.QIANFAN_ACCESS_KEY)
    console.log(systemEnv.QIANFAN_SECRET_KEY)
    this.client = new ChatCompletion({
      QIANFAN_ACCESS_KEY: systemEnv.QIANFAN_ACCESS_KEY,
      QIANFAN_SECRET_KEY: systemEnv.QIANFAN_SECRET_KEY,
    })
  }

  async getMessageAnswer(message: string) {
    const resp = await this.client.chat({
      messages: [
        {
          role: 'user',
          content: '你好！',
        },
      ],
    }, 'ERNIE-4.0-8K');
    console.log(resp)
  }
}

export default Ernie;
