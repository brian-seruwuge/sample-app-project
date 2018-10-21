import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ClientsComponent } from './clients/clients.component';
import { ShopsComponent } from './shops/shops.component';
import { RefundComponent } from './refund/refund.component';
import { RouterModule, Routes, Route } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbdModalBasic} from './modal-basic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {ShoppersService} from './data/shoppers.service';






const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'Clients',component:ClientsComponent},
  {path:'Shops',component:ShopsComponent},
  {path:'Refund',component:RefundComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClientsComponent,
    ShopsComponent,
    RefundComponent,
    NgbdModalBasic,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
    MatDialogModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
  ],
  providers: [ShoppersService],
  bootstrap: [AppComponent],
  entryComponents: [ShopsComponent]

})
export class AppModule { }
