import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendAppService {

  constructor(private http: HttpClient) { }

getUsers =() => {
  return this.http.get('https://glitch.com/~phantom-cord-perch')
}


}
