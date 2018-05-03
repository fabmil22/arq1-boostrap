import { Component, OnInit, PipeTransform } from '@angular/core';
import { UsersService } from '../../services/users.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
 })
export class HomeComponent implements OnInit {



  constructor( private dataserve: UsersService) { }
   data$ = this.dataserve.getUsers();
   Tool$ = this.dataserve.getTools();
  ngOnInit() {
  }

}
