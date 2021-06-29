import { ActionReducer, createReducer, on } from '@ngrx/store'
import { clearActiveUserAction, clearMessageAction, createUserSuccessAction, deleteUserSuccessAction, fetchUsersSuccessAction, setActiveUserAction, setMessageAction, setTitleAction, updateUserSuccessAction } from './app.actions'
import { AppState, defaultAppState } from './app.state'

/**
 * The application reducer
 */
export const appReducers: ActionReducer<AppState> = createReducer(
  defaultAppState,
  on(setTitleAction, (state: AppState, { title }) => ({
    ...state,
    title
  })),
  on(fetchUsersSuccessAction, (state, { users }) => ({
    ...state,
    users
  })),
  on(createUserSuccessAction, (state, { user }) => ({
    ...state,
    users: state.users?.concat(user)
  })),
  on(updateUserSuccessAction, (state, { user }) => ({
    ...state,
    users: state.users?.map((_user) => (_user.id == user.id) ? user : _user)
  })),
  on(deleteUserSuccessAction, (state, { user }) => ({
    ...state,
    users: state.users?.filter((_user) => (_user.id != user.id))
  })),
  on(setActiveUserAction, (state, { user }) => ({
    ...state,
    activeUser: user
  })),
  on(clearActiveUserAction, (state) => ({
    ...state,
    activeUser: undefined
  })),
  on(setMessageAction, (state, { message }) => ({
    ...state,
    message
  })),
  on(clearMessageAction, (state) => ({
    ...state,
    message: undefined
  }))
)
