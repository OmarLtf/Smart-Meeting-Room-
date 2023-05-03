package com.example.springbootmongodbatlas.service;

import com.example.springbootmongodbatlas.entity.Bookings.Booking;
import com.example.springbootmongodbatlas.repo.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.awt.print.Book;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class MeetingReminderService {

    @Autowired
    private JavaMailSender mailSender;
    public void sendEmail(String toEmail, String subject, String body){
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("omar.letaief@newaccess.ch");
        message.setTo(toEmail);
        message.setText(body);
        message.setSubject(subject);

        mailSender.send(message);
        System.out.println("Mail Sent Successfully...");
    }
}
