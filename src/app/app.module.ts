import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookingRoomComponent } from './booking-room/booking-room.component';
import {RouterModule, Routes} from "@angular/router";
import {MaterializeModule} from "angular2-materialize";
import {BookingRoomService} from "./services/booking-room.service";
import {HttpModule} from "@angular/http";

const appRoutes: Routes = [
  {path: '', component : BookingRoomComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BookingRoomComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    MaterializeModule,
    HttpModule
  ],
  providers: [BookingRoomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
