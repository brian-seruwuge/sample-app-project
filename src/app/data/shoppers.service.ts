import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppersService {
clients=["Jacob", "Jerry", "Brian","Felix"]
  constructor() { }

  getFirstClient(){
    return this.clients[0];
  }
}
