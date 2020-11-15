import { Component, OnInit } from '@angular/core';
import {BackendAppService} from './backend-app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ProjectProg5';
  name : string;

constructor(private backendappService: BackendAppService) {}

ngOnInit(){
  this.backendappService.getUsers().subscribe((data) => {console.log(data);
  })
}

}