import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Message } from '@app/model'
import { MessageType } from '@app/enum'
import { User } from '@app/model'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  @Input() users: User[] | null | undefined
  @Output() addUser: EventEmitter<never> = new EventEmitter<never>()
  @Output() updateUser: EventEmitter<User> = new EventEmitter<User>()
  @Output() deleteUser: EventEmitter<User> = new EventEmitter<User>()

  tapAddUser(): void {
    this.addUser.emit()
  }

  tapUpdateUser(user: User): void {
    this.updateUser.emit(user)
  }

  tapDeleteUser(user: User): void {
    this.deleteUser.emit(user)
  }

  getLoadingMessage(): Message {
    return new Message('Loading...', MessageType.Info)
  }

  getEmptyMessageType(): MessageType {
    return MessageType.Warning
  }
}
