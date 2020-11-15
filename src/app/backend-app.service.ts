import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './user';
import { USERS } from './mock-users'
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root'})
export class BackendAppService {

  
    constructor(private http: HttpClient, private messageService: MessageService) { }
    
    getUsers(): Observable<User[]> {
      // TODO: send the message _after_ fetching the heroes
      this.http.get('https://glitch.com/~phantom-cord-perch') 
      this.messageService.add('BackendAppService: fetched users');
      return of(USERS);
    }
    
    getUser(id: number): Observable<User> {
      // TODO: send the message _after_ fetching the hero
      this.http.get('https://glitch.com/~phantom-cord-perch') 
      this.messageService.add(`BackendAppService: fetched user id=${id}`);
      return of(USERS.find(user => user.id === id));
    }

    // getUsers =() => {
    //   return this.http.get('https://glitch.com/~phantom-cord-perch') 
    // }

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


