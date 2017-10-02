import {Component, EventEmitter, OnInit} from '@angular/core';
import {Room} from "../models/room.model";
import {BookingRoomService} from "../services/booking-room.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Booking} from "../models/booking.model";
import {MaterializeAction} from "angular2-materialize";

@Component({
  selector: 'app-booking-room',
  templateUrl: './booking-room.component.html',
  styleUrls: ['./booking-room.component.css']
})
export class BookingRoomComponent implements OnInit {

  rooms = null;
  bookingForm : FormGroup;
  roomForm : FormGroup;
  booking: Booking;

  modalActions2 = new EventEmitter<string|MaterializeAction>();

  constructor(private bookingService : BookingRoomService, private fb: FormBuilder) {
    this.booking = new Booking('',new Date(),new Date(),'');
    let book: Array<Booking>[];
     let room = new Room(0,'',0,book,'');
    this.bookingForm = this.fb.group({
        datemeeting: ['', [Validators.required]],
        fromtime: ['', [Validators.required]],
        totime: ['', [Validators.required]]
    });

    this.roomForm = this.fb.group({
      name: ['',[Validators.required]],
      capacity: ['',[Validators.required]]
    });
  }

  ngOnInit() {

    this.bookingService.getRooms().subscribe(result => {
      this.rooms = result.json();
    })
  }

  createBooking(room){

    let bookingNew = this.bookingForm.value;
    room.bookings.push({'idBooking':null,
                        'start': new Date(bookingNew.datemeeting +'T'+ bookingNew.fromtime+'Z').getTime(),
                        'end':new Date(bookingNew.datemeeting +'T'+ bookingNew.totime+'Z').getTime(),
                        'state':'SOLICITADA'});

    this.bookingService.updateBooking(room)
  }

  createRoom(){
    console.log("create")
    let roomNew = this.roomForm.value;
    let room = {
      'name': roomNew.name,
      'capacity': roomNew.capacity
    }
    this.bookingService.createRoom(room);
  }

  setConfirm(bookingConfirm : Booking, room){
    bookingConfirm.state = 'CONFIRMADA';
    this.bookingService.updateBooking(room);
  }

  openModal2() {
    this.modalActions2.emit({action:"modal",params:['open']});
  }
  closeModal2() {
    this.modalActions2.emit({action:"modal",params:['close']});
  }

}
