import { Component, OnInit } from '@angular/core';
import {Room} from "../models/room.model";
import {BookingRoomService} from "../services/booking-room.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-booking-room',
  templateUrl: './booking-room.component.html',
  styleUrls: ['./booking-room.component.css']
})
export class BookingRoomComponent implements OnInit {

  rooms = null;

  constructor(private bookingService : BookingRoomService) { }

  ngOnInit() {

    this.bookingService.getRooms().subscribe(result => {
      this.rooms = result.json();
    })
  }

}
