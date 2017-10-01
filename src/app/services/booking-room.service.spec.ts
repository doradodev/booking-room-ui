import { TestBed, inject } from '@angular/core/testing';

import { BookingRoomService } from './booking-room.service';

describe('BookingRoomService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookingRoomService]
    });
  });

  it('should be created', inject([BookingRoomService], (service: BookingRoomService) => {
    expect(service).toBeTruthy();
  }));
});
