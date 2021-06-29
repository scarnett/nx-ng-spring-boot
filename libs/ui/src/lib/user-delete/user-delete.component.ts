import { Component, EventEmitter, Input, Output } from '@angular/core'
import { User } from '@app/model'

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.scss']
})
export class UserDeleteComponent {
  @Input() user?: User | null
  @Output() delete: EventEmitter<User | null> = new EventEmitter<User | null>()
  @Output() closeModel: EventEmitter<void> = new EventEmitter<void>()

  tapYes(): void {
    this.delete.emit(this.user)
  }

  tapNo(): void {
    this.closeModel.emit()
  }
}
