import { createAction, props } from '@ngrx/store'
import { Message } from './model/message.model'
import { User } from './model/user.model'

export const setTitleAction = createAction(
  '[App] Set Title',
  props<{ title: string[] }>()
)

export const fetchUsersAction = createAction(
  '[App] Fetch Users'
)

export const fetchUsersSuccessAction = createAction(
  '[App] Fetch Users Success',
  props<{ users: User[] }>()
)

export const fetchUsersFailureAction = createAction(
  '[App] Fetch Users Failure',
  props<{ error: unknown; message: string }>()
)

export const saveUserAction = createAction(
  '[App] Save User',
  props<{ user: User }>()
)

export const createUserSuccessAction = createAction(
  '[App] Create User Success',
  props<{ user: User }>()
)

export const createUserFailureAction = createAction(
  '[App] Create User Failure',
  props<{ error: unknown; message: string }>()
)

export const updateUserSuccessAction = createAction(
  '[App] Update User Success',
  props<{ user: User }>()
)

export const updateUserFailureAction = createAction(
  '[App] Update User Failure',
  props<{ error: unknown; message: string }>()
)

export const deleteUserAction = createAction(
  '[App] Delete User',
  props<{ user: User }>()
)

export const deleteUserSuccessAction = createAction(
  '[App] Delete User Success',
  props<{ user: User }>()
)

export const deleteUserFailureAction = createAction(
  '[App] Delete User Failure',
  props<{ error: unknown; message: string }>()
)

export const setActiveUserAction = createAction(
  '[App] Set Active User',
  props<{ user: User }>()
)

export const clearActiveUserAction = createAction(
  '[App] Clear Active User'
)

export const setMessageAction = createAction(
  '[App] Set Message',
  props<{ message: Message }>()
)

export const clearMessageAction = createAction(
  '[App] Clear Message'
)
