export interface IModel {
  getMessageAnswer: (message: string) => void

  updateChatModel: (type: string) =>IModel
  updateEmbeddingModel: (type: string) =>IModel
}
