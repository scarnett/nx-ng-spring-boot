import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { User } from '../model/user.model'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private http: HttpClient
  ) { }

  fetchUsers(): Observable<User[]> {
    return this.http.get<User[]>('/api/v1/fetch-all')
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>('/api/v1/create', user)
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`/api/v1/update/${user.id}`, user)
  }

  deleteUser(user: User): Observable<void> {
    return this.http.delete<void>(`/api/v1/delete/${user.id}`)
  }
}
