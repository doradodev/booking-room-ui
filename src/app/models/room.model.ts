import {Booking} from "./booking.model";

export class Room {
  constructor(public id:number,
              public name: string,
              public capacity: number,
              public booking: Array<Booking>[],
              public img: string){}
}
