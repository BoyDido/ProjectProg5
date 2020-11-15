import { createUrlResolverWithoutPackagePrefix } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-notes',
  templateUrl: './user-notes.component.html',
  styleUrls: ['./user-notes.component.css']
})

export class UserNotesComponent implements OnInit {
  @Input()user: User;
  
  constructor() { }

  ngOnInit(): void {
  }

}
