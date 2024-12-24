export interface IModel {
  getMessageAnswer: (message: string) => void
  childTypes: string[]
}
