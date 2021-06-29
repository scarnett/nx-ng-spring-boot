import { MessageType } from '../enum/message.enum'

export class Message {
  text?: string
  type?: MessageType

  constructor(
    text: string,
    type: MessageType
  ) {
    this.text = text
    this.type = type
  }
}
