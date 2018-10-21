import { Component, OnInit } from '@angular/core';
import {ShoppersService} from '../data/shoppers.service';

@Component({
  selector: 'app-refund',
  templateUrl: './refund.component.html',
  styleUrls: ['./refund.component.css']
})
export class RefundComponent implements OnInit {
  client:string;

  constructor(private shoppersService:ShoppersService) { }



  ngOnInit() {
    this.client=this.shoppersService.getFirstClient();
  }

}

