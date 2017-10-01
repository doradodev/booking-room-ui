import { Injectable } from '@angular/core';
import {Headers, Http} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class BookingRoomService {
  BASE_URL = 'http://192.168.0.6:8081/api/booking'

  constructor(private http: Http) { }

  public getRooms() : Observable<any>{
    const headers =  new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    return this.http.post(this.BASE_URL+'/findAll', headers);
  }

}
