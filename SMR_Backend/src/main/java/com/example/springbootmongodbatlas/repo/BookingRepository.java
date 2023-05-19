package com.example.springbootmongodbatlas.repo;

import com.example.springbootmongodbatlas.entity.Bookings.Booking;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.ZoneId;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.List;

public interface BookingRepository extends MongoRepository<Booking,Integer> {

    @Query("{ 'startTime' : { $gte: ?0, $lte: ?1 } }")
    List<Booking> findAllBookingsForMeetingsStartingInNext15Min(Date now, Date in15minLater);

    @Query("{'userId' :  ?0}")
    List<Booking> findBookingByUserId(int id);


    @Query("{ 'startTime' : { $gte: ?0, $lt: ?1 } }")
    List<Booking> findTodaysMeetings(Date today, Date startOfNextDay);



}
