import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { USERS } from './mock-users';

@Injectable({
  providedIn: 'root'
})
export class BackendAppService {

  
    constructor(private http: HttpClient) { }
    
    // getHeroes(): User[] {
    //   return USERS;
    // }
    

    getUsers =() => {
      return this.http.get('https://glitch.com/~phantom-cord-perch') 
    }

    postUsers(user: User):Observable<User> {
      return this.http.post<User>('https://glitch.com/~phantom-cord-perch', user);
    }
    
    deleteUser(id: number): Observable<{}>{
      const urlbase = 'https://glitch.com/~phantom-cord-perch';
      const url = urlbase + '/' + [id];
      return this.http.delete(url);
    }


    getNotes =() => {
      return this.http.get('https://glitch.com/~phantom-cord-perch/user')
    }

    postNotes(note: any):Observable<any> {
      return this.http.post('https://glitch.com/~phantom-cord-perch/user', note)
    }
    
    patchNote(adjustNote){ 
      return this.http.patch('https://glitch.com/~phantom-cord-perch/user', adjustNote)
    }

    deleteNote(id: number): Observable<{}>{
      const urlbase = 'https://glitch.com/~phantom-cord-perch/user';
      const url = urlbase + '/' + [id];
      return this.http.delete(url);
    }
}


