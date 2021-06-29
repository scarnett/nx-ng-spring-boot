import { Injectable } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { Action } from '@ngrx/store'
import { Observable, of } from 'rxjs'
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators'
import { createUserFailureAction, createUserSuccessAction, deleteUserAction, deleteUserFailureAction, deleteUserSuccessAction, fetchUsersAction, fetchUsersFailureAction, fetchUsersSuccessAction, saveUserAction, setMessageAction, setTitleAction, updateUserFailureAction, updateUserSuccessAction } from './app.actions'
import { MessageType } from './enum'
import { Message, User } from './model'
import { UserService } from './services/user.service'

@Injectable()
export class AppEffects {
  setTitle$ = createEffect((): Observable<void> =>
    this.actions$.pipe(
      ofType(setTitleAction),
      switchMap(title => [
        this.titleService.setTitle(title.title.join(' - '))
      ])
    ),
    { dispatch: false }
  )

  fetchUsers$ = createEffect((): Observable<Action> => this.actions$
    .pipe(
      ofType(fetchUsersAction),
      mergeMap(() => this.userService.fetchUsers()
        .pipe(
          map((users: User[]) => fetchUsersSuccessAction({ users })),
          catchError(error => of(fetchUsersFailureAction({
            error,
            message: 'Unable to fetch users, please try again'
          })))
        )
      )
    )
  )

  saveUser$ = createEffect((): Observable<Action> => this.actions$
    .pipe(
      ofType(saveUserAction),
      switchMap((action) => {
        if (action.user.id) {
          return this.userService
            .updateUser(action.user)
            .pipe(
              map((user: User) => updateUserSuccessAction({ user })),
              catchError(error => of(updateUserFailureAction({
                error,
                message: 'Unable to update user, please try again'
              })))
            )
        }

        return this.userService
          .createUser(action.user)
          .pipe(
            map((user: User) => createUserSuccessAction({ user })),
            catchError(error => of(createUserFailureAction({
              error,
              message: 'Unable to create user, please try again'
            })))
          )
      })
    )
  )

  deleteUser$ = createEffect((): Observable<Action> => this.actions$
    .pipe(
      ofType(deleteUserAction),
      switchMap((action) => {
        return this.userService
          .deleteUser(action.user)
          .pipe(
            map(() => deleteUserSuccessAction({ user: action.user })),
            catchError(error => of(deleteUserFailureAction({
              error,
              message: 'Unable to delete user, please try again'
            })))
          )
      })
    )
  )

  createUserSuccess$ = createEffect((): Observable<Action> => this.actions$
    .pipe(
      ofType(createUserSuccessAction),
      map(() => setMessageAction({ message: new Message('New user created successfully', MessageType.Success) }))
    )
  )

  updateUserSuccess$ = createEffect((): Observable<Action> => this.actions$
    .pipe(
      ofType(updateUserSuccessAction),
      map(() => setMessageAction({ message: new Message('User updated successfully', MessageType.Success) }))
    )
  )

  deleteUserSuccess$ = createEffect((): Observable<Action> => this.actions$
    .pipe(
      ofType(deleteUserSuccessAction),
      map(() => setMessageAction({ message: new Message('User deleted successfully', MessageType.Success) }))
    )
  )

  crudUserFailure$ = createEffect((): Observable<Action> => this.actions$
    .pipe(
      ofType(createUserFailureAction, updateUserFailureAction, deleteUserFailureAction),
      map((action) => setMessageAction({ message: new Message(action.message, MessageType.Danger) }))
    )
  )

  constructor(
    private actions$: Actions,
    private titleService: Title,
    private userService: UserService
  ) { }
}
