package com.example.springbootmongodbatlas.service.impl;

import com.example.springbootmongodbatlas.entity.Bookings.Booking;
import com.example.springbootmongodbatlas.repo.BookingRepository;
import com.example.springbootmongodbatlas.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookingServiceImpl implements BookingService {
    @Autowired
    private BookingRepository bookingRepository;
    @Override
    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    @Override
    public Booking getBooking( int id ){return bookingRepository.findById(id).get();}


    @Override
    public Booking addBooking(Booking booking){
        return bookingRepository.save(booking);
    }

    @Override
    public Booking deleteBooking(int id) {
        Booking booking = bookingRepository.findById(id).get();
        bookingRepository.delete(booking);
        return booking ;
    }

    @Override
    public Booking updateBooking(int id, Booking booking) {
        Booking updatedBooking = bookingRepository.findById(id).get();
        updatedBooking.setBookingStatus(booking.getBookingStatus());
        updatedBooking.setEndTime(booking.getEndTime());
        updatedBooking.setNotifications(booking.getNotifications());
        updatedBooking.setRoomId(booking.getRoomId());
        updatedBooking.setStartTime(booking.getStartTime());
        updatedBooking.setUserId(booking.getUserId());
      bookingRepository.save(updatedBooking);
      return updatedBooking;


    }
}
