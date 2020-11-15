//import { createUrlResolverWithoutPackagePrefix } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {BackendAppService} from '../backend-app.service';

@Component({
  selector: 'app-user-notes',
  templateUrl: './user-notes.component.html',
  styleUrls: ['./user-notes.component.css']
})

export class UserNotesComponent implements OnInit {
  user: User;
  
  constructor(  private route: ActivatedRoute, private backendappService: BackendAppService,
    private location: Location) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id'); // nog GetUserById inbrengen in glitch
    this.backendappService.getUsers()
      .subscribe(user => this.user.id = id);
  }

  goBack(): void {
    this.location.back();
  }

}
