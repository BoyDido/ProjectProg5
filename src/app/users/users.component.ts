import { Component, OnInit } from '@angular/core';
import {BackendAppService} from '../backend-app.service';
import { User } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users : User[];
   selectedUser: User;
username : string;

onSelect(user: User): void {
  this.selectedUser = user;
}

add(name: string): void {
  name = name.trim();
if (!name) {return;}}

  constructor(private BackendAppService: BackendAppService) { }

 
  ngOnInit(): void {
  }



}
