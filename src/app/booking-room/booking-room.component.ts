import { Component, OnInit } from '@angular/core';
import {Room} from "../models/room.model";
import {BookingRoomService} from "../services/booking-room.service";
import {Observable} from "rxjs/Observable";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Booking} from "../models/booking.model";

@Component({
  selector: 'app-booking-room',
  templateUrl: './booking-room.component.html',
  styleUrls: ['./booking-room.component.css']
})
export class BookingRoomComponent implements OnInit {

  rooms = null;
  bookingForm : FormGroup;
  booking: Booking;

  constructor(private bookingService : BookingRoomService, private fb: FormBuilder) {
    this.booking = new Booking('',new Date(),new Date(),'');
    this.bookingForm = this.fb.group({
        datemeeting: ['', [Validators.required]],
        fromtime: ['', [Validators.required]],
        totime: ['', [Validators.required]]
    });
  }

  ngOnInit() {

    this.bookingService.getRooms().subscribe(result => {
      this.rooms = result.json();
    })
  }

  createBooking(room){

    console.log(room);

    let bookingNew = this.bookingForm.value;
    console.log(bookingNew);

    let start = bookingNew.datemeeting +'T'+ bookingNew.fromtime+'Z';
    let end = bookingNew.datemeeting +'T'+ bookingNew.totime+'Z';
    let date = new Date(start);
    let newBooking = new Booking(null, new Date(bookingNew.datemeeting +'T'+ bookingNew.fromtime+'Z'),
                                  new Date(bookingNew.datemeeting +'T'+ bookingNew.totime+'Z'),'SOLICITADA');

    room.bookings.push({'idBooking':null,'start': new Date(bookingNew.datemeeting +'T'+ bookingNew.fromtime+'Z'),
      'end':new Date(bookingNew.datemeeting +'T'+ bookingNew.totime+'Z'),'state':'SOLICITADA'});

    this.bookingService.updateBooking(room)
  }

  createRoom(){

  }

  setConfirm(bookingConfirm : Booking, room){

    bookingConfirm.state = 'CONFIRMADA';
    //bookingConfirm.start = new Date(bookingConfirm.start);
    //bookingConfirm.end = new Date(bookingConfirm.end);

    console.log(bookingConfirm);
    console.log(room);


    this.bookingService.updateBooking(room);
  }

}
