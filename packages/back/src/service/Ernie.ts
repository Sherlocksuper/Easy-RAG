import { ernieInstance } from "../models/index.js";
import { IRawMessage } from "node_modules/@clients/public/index.ts";
import Ernie from "../models/Ernie.js";
import { IModel } from "@clients/index";

export const getChatModelInstanceByType = (type: string) => {
  let instance: IModel = undefined
  if (Ernie.availableChatModelNames.includes(type)) {
    instance = ernieInstance
  }

  if (!instance) {
    return ernieInstance
  }
  return instance.updateChatModel(type)
}

export const getEmbeddingModelInstanceByType = (type: string) => {
  let instance: IModel = undefined
  if (Ernie.availableEmbeddingModelNames.includes(type)) {
    instance = ernieInstance
  }

  if (!instance) {
    return ernieInstance
  }
  return instance.updateEmbeddingModel(type)
}


export const getMessageAnswer = (message: IRawMessage) => {
  const instance = getChatModelInstanceByType(message.modelType)
  return instance.getMessageAnswer(message.message)
}

export const getEmbeddingAnswer = async (message: IRawMessage, texts: string[]) => {
  const instance = getEmbeddingModelInstanceByType(message.modelType)
  return await instance.getEmbeddingAnswer(texts)
}


