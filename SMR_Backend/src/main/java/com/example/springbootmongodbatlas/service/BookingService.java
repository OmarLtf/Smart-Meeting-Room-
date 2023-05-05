package com.example.springbootmongodbatlas.service;

import com.example.springbootmongodbatlas.entity.Bookings.Booking;

import java.awt.print.Book;
import java.util.List;

public interface BookingService {

    public Booking getBooking(int id);
    public List<Booking> getAllBookings();

    public Booking addBooking(Booking booking);
    public Booking deleteBooking(int id );

    public Booking updateBooking(int id , Booking booking);
    public List<Booking> getMeetingsStartingIn15min();

}