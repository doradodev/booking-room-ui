import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Booking} from "../models/booking.model";
import {Room} from "../models/room.model";

@Injectable()
export class BookingRoomService {
  BASE_URL = 'http://localhost:8081/api/booking/';


  private headers = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json'});
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  public getRooms() : Observable<any>{

    return this.http.post(this.BASE_URL+'findAll', this.headers);
  }

  public updateBooking(room: Room){

    console.log(room)
    console.log(`${this.BASE_URL}${room['idRoom']}`);
    return this.http.put(`${this.BASE_URL}${room['idRoom']}` , room, this.options)
  }

}
