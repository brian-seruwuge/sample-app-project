import { Component } from '@angular/core';
import {NgbdModalBasic} from './modal-basic';
import {MatDialog} from '@angular/material';
import { ShopsComponent } from './shops/shops.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public dialog: MatDialog) {}


  openDialog(): void {
    const dialogRef = this.dialog.open(ShopsComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  }
