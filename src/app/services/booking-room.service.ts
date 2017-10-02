import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BookingRoomService {
  BASE_URL = 'http://18.221.238.171:8081/api/booking/';
  //BASE_URL = 'http://localhost:8081/api/booking/';



  private headers = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json'});
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  public getRooms() : Observable<any>{

    return this.http.post(this.BASE_URL+'findAll', this.headers);
  }

  public updateBooking(room):Observable<Response>{

    let body = JSON.stringify(room);
    return this.http.put(`${this.BASE_URL}${room['idRoom']}`, body, this.options)
      .map((res) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  public createRoom(room):Observable<Response>{

    let body = JSON.stringify(room);
    return this.http.post(`${this.BASE_URL}${null}`, body, this.options)
      .map((res) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }

}
