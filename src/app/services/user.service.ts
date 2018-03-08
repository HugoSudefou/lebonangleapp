import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';


@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }


  loginTest() {
    let id_team = 39;
    let id_match = 280;
    let score = 100;

    return this.http.post<any>(environment.urlApi + 'matchs/team/score', { id_team: id_team, id_match: id_match, score: score})
      .map(user => {
        console.log('user : ', user)
        return user;
      });
  }

  getAll() {
    return this.http.get<[any]>('/api/users');
  }

  getById(id: number) {
    return this.http.get('/api/users/' + id);
  }

  create(user) {
    return this.http.post('/api/users', user);
  }

  update(user) {
    return this.http.put('/api/users/' + user.id, user);
  }

  delete(id: number) {
    return this.http.delete('/api/users/' + id);
  }
}
