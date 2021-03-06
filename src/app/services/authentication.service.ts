import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post<any>(environment.urlApi + 'arbiter/login', { username: username, password: password }, {observe: 'response'})
      .map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.headers.get('Authorization')) {
          user.body.token = user.headers.get('Authorization');
          //user.body.type =  user.body['type'];
          user.body.type = (Math.floor(Math.random() * Math.floor(2)) === 1) ? 'buyer' : 'seller';
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user.body));
        }

        return user;
      });
  }

  logout() {
    console.log('On vient de suppr currentUser')
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
