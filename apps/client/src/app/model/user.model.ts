export class User {
  id?: number
  firstName?: string
  lastName?: string
  email?: string

  constructor(
    init?: Partial<User>
  ) {
    Object.assign(this, init)
  }
}
