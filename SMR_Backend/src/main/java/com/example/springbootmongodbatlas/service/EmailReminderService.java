package com.example.springbootmongodbatlas.service;

import com.example.springbootmongodbatlas.entity.Bookings.Booking;
import com.example.springbootmongodbatlas.repo.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
@Service
public class EmailReminderService {

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private JavaMailSender mailSender;
    public void sendEmail(String toEmail, String subject, String body){
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("no-reply-FNZ@newaccess.ch");
        message.setTo(toEmail);
        message.setText(body);
        message.setSubject(subject);

        mailSender.send(message);
        System.out.println("Mail Sent Successfully to " + toEmail);
    }


    public Booking updateBookingStatus(int id, Booking booking) {
        Booking updatedBooking = bookingRepository.findById(id).get();
        updatedBooking.setBookingStatus(booking.getBookingStatus());
        updatedBooking.setEndTime(booking.getEndTime());
        updatedBooking.setNotifications(booking.getNotifications());
        updatedBooking.setStartTime(booking.getStartTime());
        bookingRepository.save(updatedBooking);
        return updatedBooking;
    }
}
