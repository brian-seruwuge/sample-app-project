import { Component, OnInit } from '@angular/core';
import {ShoppersService} from '../data/shoppers.service';



@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
client:string;

  constructor(private shoppersService:ShoppersService) { }



  ngOnInit() {
    this.client=this.shoppersService.getFirstClient();
  }

}
