import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import 'rxjs/add/operator/catch';
import { User } from '../model/user';
import { Tool } from '../model/tool';



const cudOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable()
export class UsersService {

  private usersUrl = 'api/users';
  private usersUrlTools = 'api/tools';
  constructor (private http: HttpClient) {}

  getUsers (): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl)
      .catch(this.handleError);
  }

  getTools (): Observable<Tool[]> {
    return this.http.get<Tool[]>(this.usersUrlTools)
      .catch(this.handleError);
  }


  getUser(id: string): Observable<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<User[]>(url)
      .catch(this.handleError);
  }

  addUser (user: User): Observable<User> {
    const newUser = Object.assign({}, user);

    return this.http.post<User>(this.usersUrl, newUser, cudOptions)
      .catch(this.handleError);
  }

  deleteUser (user: User | number): Observable<User> {
    const id = typeof user === 'number' ? user : user.id;
    const url = `${this.usersUrl}/${id}`;

    return this.http.delete<User>(url, cudOptions)
      .catch(this.handleError);
  }

  updateUser (user: User): Observable<null> {
    return this.http.put(this.usersUrl, user, cudOptions)
      .catch(this.handleError);
  }

  private handleError (error: any) {
    //console.error(error);
    return Observable.throw(error);
  }
}
