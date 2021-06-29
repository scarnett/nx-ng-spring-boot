import { Component, OnDestroy, OnInit, TemplateRef } from '@angular/core'
import { Store } from '@ngrx/store'
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal'
import { Observable, Subscription } from 'rxjs'
import { clearActiveUserAction, clearMessageAction, deleteUserAction, fetchUsersAction, saveUserAction, setActiveUserAction } from './app.actions'
import { activeUserSelector, AppState, messageSelector, usersSelector } from './app.state'
import { MessageType } from './enum'
import { Message } from './model'
import { User } from './model/user.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  users$: Observable<User[] | undefined> = this.store.select(usersSelector)
  activeUser$: Observable<User> = this.store.select(activeUserSelector)
  messageSelector$: Observable<Message> = this.store.select(messageSelector)
  subscriptions?: Subscription

  userFormModalRef?: BsModalRef
  userDeleteModalRef?: BsModalRef

  constructor(
    private store: Store<AppState>,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
    this.subscriptions = new Subscription()
    this.store.dispatch(fetchUsersAction())
  }

  ngOnDestroy() {
    this.subscriptions?.unsubscribe();
  }

  tapDeleteUser(user: User): void {
    this.store.dispatch(deleteUserAction({ user }))
  }

  tapOpenUserFormModal(template: TemplateRef<unknown>, user?: User): void {
    if (user) {
      this.store.dispatch(setActiveUserAction({ user }))
    }

    this.userFormModalRef = this.modalService.show(template)
    this.subscriptions?.add(this.userFormModalRef.onHide.subscribe(() => {
      this.store.dispatch(clearActiveUserAction())
    }))
  }

  tapOpenDeleteUserModal(template: TemplateRef<unknown>, user?: User): void {
    if (user) {
      this.store.dispatch(setActiveUserAction({ user }))
    }

    this.userDeleteModalRef = this.modalService.show(template)
    this.subscriptions?.add(this.userDeleteModalRef.onHide.subscribe(() => {
      this.store.dispatch(clearActiveUserAction())
    }))
  }

  saveUser(formData: { [x: string]: unknown }): void {
    const user: User = Object.assign(new User(), { id: formData['id'] }, formData['data'])
    this.store.dispatch(saveUserAction({ user }))
    this.modalService.hide()
  }

  deleteUser(user: User): void {
    this.store.dispatch(deleteUserAction({ user }))
    this.modalService.hide()
  }

  closeUserFormModel(): void {
    this.userFormModalRef?.hide()
  }

  closeDeleteUserModel(): void {
    this.userDeleteModalRef?.hide()
  }

  onMessageClosed(): void {
    this.store.dispatch(clearMessageAction())
  }

  getDeleteMessage(user?: User | null): Message {
    if (user == null) {
      return new Message(`Are you sure you want to delete this user?`, MessageType.Danger)
    }

    return new Message(`Are you sure you want to delete ${user?.firstName} ${user?.lastName}?`, MessageType.Danger)
  }
}
