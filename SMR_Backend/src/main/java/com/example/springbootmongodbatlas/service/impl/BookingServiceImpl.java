package com.example.springbootmongodbatlas.service.impl;

import com.example.springbootmongodbatlas.entity.Bookings.Booking;
import com.example.springbootmongodbatlas.entity.Rooms.RoomStatus;
import com.example.springbootmongodbatlas.entity.Rooms.meetingRoom;
import com.example.springbootmongodbatlas.repo.BookingRepository;
import com.example.springbootmongodbatlas.repo.RoomRepository;
import com.example.springbootmongodbatlas.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.ZoneId;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import static org.apache.tomcat.jni.SSL.getTime;

@Service
public class BookingServiceImpl implements BookingService {
    Date today = Date.from(LocalDate.now().atStartOfDay(ZoneId.systemDefault()).toInstant());
    Date startOfNextDay = Date.from(LocalDate.now().plus(1, ChronoUnit.DAYS).atStartOfDay(ZoneId.systemDefault()).toInstant());
    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private RoomRepository roomRepository;
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
        updatedBooking.setStartTime(booking.getStartTime());
      bookingRepository.save(updatedBooking);
      return updatedBooking;

    }

    @Override
    public List<Booking> getTodaysBookings(){
        return bookingRepository.findTodaysMeetings(today, startOfNextDay);
    }




    @Override
    public List<Booking> getMeetingsStartingIn15min(){
        Date DateTimeNow = new Date();
        Date DateTimeAfter15min = new Date(DateTimeNow.getTime() + (15 * 60 * 1000)); // 15 minutes in milliseconds

        List<Booking> bookingsIn15min = bookingRepository.findAllBookingsForMeetingsStartingInNext15Min(DateTimeNow, DateTimeAfter15min);

        return bookingsIn15min;

    }

    @Override
    public List<Booking> getMeetingsStartedBefore15min(){
        Date DateTimeNow = new Date();
        Date DateTimeBefore15min = new Date(DateTimeNow.getTime() - (15 * 60 * 1000)); // 15 minutes in milliseconds

        List<Booking> bookingsBefore15min = bookingRepository.findAllBookingsForMeetingsStartedBefore15Min(DateTimeBefore15min);
        List<Booking> panding15minBookings = new ArrayList<>();
        for(Booking booking : bookingsBefore15min){
           meetingRoom room =  roomRepository.findById(booking.getRoomId()).get();
           if(room.getStatus().equals(RoomStatus.PANDING)){
               panding15minBookings.add(booking);
           }
        }
        return panding15minBookings;

    }

    @Override
    public List<Booking> getUserBookings(int id){
        return bookingRepository.findBookingByUserId( id);
    }

    @Override
    public List<Booking> findMeetingsInProgress(Integer id, Date date){
        return bookingRepository.findAllMeetingsInProgressByRoomId(id, date);
    }
}
