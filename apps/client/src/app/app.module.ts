import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser'
import { EffectsModule } from '@ngrx/effects'
import { MetaReducer, StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { storeFreeze } from 'ngrx-store-freeze'
import { ModalModule } from 'ngx-bootstrap/modal'
import { UiModule } from '@app/ui'
import { AppComponent } from './app.component'
import { defaultAppState } from './app.state'
import { AppEffects } from './app.effects'
import { appReducers } from './app.reducer'
import { UserService } from './services/user.service'
import { environment } from '../environments/environment'

export const metaReducers: MetaReducer<unknown>[] = !environment.production
  ? [storeFreeze]
  : []

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
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
    UiModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule { }
