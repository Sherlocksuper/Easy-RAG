import {IModel} from "@clients/index";
import {ChatCompletion} from "@baiducloud/qianfan";
import {ISystemEnv, systemEnv} from "../../config.js";

enum ErnieChildType {
  ERNIE_4_0_8K = 'ERNIE-4.0-8K',
  ERNIE_4_0_8K_PREVIEW = 'ERNIE-4.0-8K-Preview',
  ERNIE_4_0_8K_LATEST = 'ERNIE-4.0-8K-Latest',
  ERNIE_4_0_8K_0613 = 'ERNIE-4.0-8K-0613',
  ERNIE_4_0_TURBO_8K = 'ERNIE-4.0-Turbo-8K',
  ERNIE_4_0_TURBO_8K_PREVIEW = 'ERNIE-4.0-Turbo-8K-Preview',
  ERNIE_4_0_TURBO_8K_LATEST = 'ERNIE-4.0-Turbo-8K-Latest',
  ERNIE_4_0_TURBO_8K_0628 = 'ERNIE-4.0-Turbo-8K-0628',
  ERNIE_4_0_TURBO_128K = 'ERNIE-4.0-Turbo-128K',
  ERNIE_3_5_8K = 'ERNIE-3.5-8K',
  ERNIE_3_5_8K_PREVIEW = 'ERNIE-3.5-8K-Preview',
  ERNIE_3_5_128K = 'ERNIE-3.5-128K',
  ERNIE_3_5_8K_0613 = 'ERNIE-3.5-8K-0613',
  ERNIE_3_5_8K_0701 = 'ERNIE-3.5-8K-0701',
  ERNIE_3_5_128K_PREVIEW = 'ERNIE-3.5-128K-Preview',
}

enum ErnieEmbeddingType {
  Embedding_V1 = 'Embedding-v1',
}

class Ernie implements IModel {
  client = undefined;
  selectChatModel = ErnieChildType.ERNIE_4_0_8K;
  selectEmbeddingModel = ErnieEmbeddingType.Embedding_V1;

  static availableChatModels = ErnieChildType
  static availableChatModelNames = Object.values(ErnieChildType) as string[]

  static availableEmbeddingModels = ErnieEmbeddingType
  static availableEmbeddingModelNames = Object.values(ErnieEmbeddingType) as string[]


  constructor(systemEnv: ISystemEnv) {
    this.client = new ChatCompletion({
      QIANFAN_ACCESS_KEY: systemEnv.QIANFAN_ACCESS_KEY,
      QIANFAN_SECRET_KEY: systemEnv.QIANFAN_SECRET_KEY,
    })
  }

  updateChatModel(type: string) {
    this.selectChatModel = type as ErnieChildType
    return this
  }

  updateEmbeddingModel(type: string) {
    this.selectEmbeddingModel = type as ErnieEmbeddingType
    return this
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
