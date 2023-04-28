package com.example.springbootmongodbatlas.controller;

import com.example.springbootmongodbatlas.entity.Bookings.Booking;
import com.example.springbootmongodbatlas.entity.Rooms.meetingRoom;
import com.example.springbootmongodbatlas.service.BookingService;
import com.example.springbootmongodbatlas.service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.awt.print.Book;
import java.util.List;

@RestController
@RequestMapping("/api/booking")
public class BookingController {
    @Autowired
    private BookingService bookingService;
    @GetMapping("/all")
    public List<Booking> getAllBookings() {
       return bookingService.getAllBookings();
    }
    @GetMapping("/{id}")
    public Booking getBooking(@PathVariable int id ) {
        System.out.println(bookingService.getBooking(id));
        return bookingService.getBooking(id);
    }

    @PostMapping("/insert")
    public Booking insert(@RequestBody Booking booking){
        return  bookingService.addBooking(booking);
    }

    @PutMapping("/update/{id}")
   public Booking update(@PathVariable int id,@RequestBody Booking booking ){
       return bookingService.updateBooking(id, booking);
    }

    @DeleteMapping("/delete/{id}")
    public Booking delete(@PathVariable int id ){

        return  bookingService.deleteBooking(id);
    }
}
