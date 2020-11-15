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

constructor(private backendappService: BackendAppService) { }

add(username: string): void {
  username = username.trim();
  if (!username) { return; }
  this.backendappService.postUsers({ username } as User)
    .subscribe(user => {
      this.users.push(user);
    });
}
  
delete(user: User): void {
  this.users = this.users.filter(u => u !== user);
  this.backendappService.deleteUser(user.id).subscribe();
}

ngOnInit(): void {
  this.backendappService.getUsers().subscribe((data) => {console.log(data);})
  }



}
