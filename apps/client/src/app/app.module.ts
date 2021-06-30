import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser'
import { EffectsModule } from '@ngrx/effects'
import { MetaReducer, StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { storeFreeze } from 'ngrx-store-freeze'
import { AlertModule } from 'ngx-bootstrap/alert'
import { ModalModule } from 'ngx-bootstrap/modal'
import { AppComponent } from './app.component'
import { defaultAppState } from './app.state'
import { AppEffects } from './app.effects'
import { appReducers } from './app.reducer'
import { UserService } from './services/user.service'
import { environment } from '../environments/environment'
import { UserFormComponent } from './ui/user-form/user-form.component'
import { UserListComponent } from './ui/user-list/user-list.component'
import { UserDeleteComponent } from './ui/user-delete/user-delete.component'
import { MessageComponent } from './ui/message/message.component'
import { ReactiveFormsModule } from '@angular/forms'

export const metaReducers: MetaReducer<unknown>[] = !environment.production
  ? [storeFreeze]
  : []

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      app: appReducers
    }, {
      initialState: {
        app: defaultAppState
      },
      metaReducers,

    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      autoPause: true,
    }),
    EffectsModule.forRoot([
      AppEffects
    ]),
    ModalModule.forRoot(),
    AlertModule.forRoot()
  ],
  declarations: [
    AppComponent,
    UserFormComponent,
    UserListComponent,
    UserDeleteComponent,
    MessageComponent
  ],
  providers: [
    UserService
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule { }
