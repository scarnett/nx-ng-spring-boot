import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { AlertModule } from 'ngx-bootstrap/alert'
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { MessageComponent } from './message/message.component'

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AlertModule.forRoot()
  ],
  declarations: [
    UserFormComponent,
    UserListComponent,
    UserDeleteComponent,
    MessageComponent
  ],
  exports: [
    UserFormComponent,
    UserListComponent,
    UserDeleteComponent,
    MessageComponent
  ]
})
export class UiModule { }
