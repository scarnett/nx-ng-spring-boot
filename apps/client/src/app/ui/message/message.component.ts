import { Component, EventEmitter, Input, Output } from '@angular/core'
import { MessageType } from 'src/app/enum'
import { Message } from 'src/app/model'

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {
  @Input() message?: Message | null
  @Input() type?: MessageType
  @Input() dismissible = false
  @Input() dismissOnTimeout = 5000
  @Output() closed: EventEmitter<void> = new EventEmitter<void>()

  getType(): string {
    if (this.type) {
      return this.type
    } else if (this.message?.type) {
      return this.message?.type
    }

    return MessageType.Info
  }

  getDismissTimeout(): number {
    if (this.dismissible) {
      return this.dismissOnTimeout
    }

    return 0
  }

  onClosed(): void {
    this.closed.emit()
  }
}
