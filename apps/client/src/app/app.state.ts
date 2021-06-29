import { Message } from './model/message.model'
import { User } from './model/user.model'

export class AppState {
  title!: string[]
  users?: User[]
  activeUser?: User
  message?: Message
}

export const defaultAppState: AppState = {
  title: ['NX-Angular-Spring-Boot']
}

export const pageTitleSelector = (state: any) => state.app.title
export const usersSelector = (state: any) => state.app.users
export const activeUserSelector = (state: any) => state.app.activeUser
export const messageSelector = (state: any) => state.app.message
