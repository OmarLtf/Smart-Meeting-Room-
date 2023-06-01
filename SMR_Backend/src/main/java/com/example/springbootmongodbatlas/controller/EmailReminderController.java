package com.example.springbootmongodbatlas.service.EmailReminder;

import com.example.springbootmongodbatlas.entity.Bookings.Booking;
import com.example.springbootmongodbatlas.entity.Notifications.Notification;
import com.example.springbootmongodbatlas.entity.Notifications.NotificationType;
import com.example.springbootmongodbatlas.entity.Rooms.RoomStatus;
import com.example.springbootmongodbatlas.entity.Rooms.meetingRoom;
import com.example.springbootmongodbatlas.entity.Users.User;
import com.example.springbootmongodbatlas.service.BookingService;
import com.example.springbootmongodbatlas.service.EmailReminderService;
import com.example.springbootmongodbatlas.service.RoomService;
import com.example.springbootmongodbatlas.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.data.ConditionalOnRepositoryType;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;

import java.util.List;

@Controller
public class EmailReminderController {
    @Autowired
    private EmailReminderService emailReminderService;
    @Autowired
    public BookingService bookingService;
    @Autowired
    public UserService userService;

    @Autowired
    public RoomService roomService;

    NotificationType notifType;

  @Scheduled(fixedRate = 60000L)
    public void remindUsers() {

        List<Booking> bookings = bookingService.getMeetingsStartingIn15min();
        for (Booking booking : bookings) {
            int userId = booking.getUserId();
            String userEmail = userService.getUser(userId).getUserEmail();
            String userName = userService.getUser(userId).getUserName();


            for (Notification notification : booking.getNotifications()){

                if(notification.getNotificationType() == notifType.REMINDER){
                    if(!notification.getNotificationSent()) {

                    emailReminderService.sendEmail(userEmail,
                                "Reminder: Meeting in 15 minutes",
                                " Hello " + userName +  "\n\nThis is a friendly reminder that you have a meeting scheduled in 15 minutes in room Carthage. \nPlease make sure to be on time, as the meeting will start promptly at the scheduled time. \n\nBest Regards. ");
                        notification.setNotificationSent(true);
                        emailReminderService.updateBookingStatus(booking.getId(), booking);

                    }
                }
            }

        }

    }
    @Scheduled(fixedRate = 6000L)
    public void cancellationReminder() {

        List<Booking> bookings = bookingService.getMeetingsStartedBefore15min();
        for (Booking booking : bookings) {
            int userId = booking.getUserId();
            String userEmail = userService.getUser(userId).getUserEmail();
            String userName = userService.getUser(userId).getUserName();


            for (Notification notification : booking.getNotifications()){

                if(notification.getNotificationType() == notifType.CANCELLATION){
                    if(!notification.getNotificationSent()) {

                       emailReminderService.sendEmail(userEmail,
                                "Cancellation: Meeting Room is no more booked ",
                                " Hello " + userName +  "\n\nthe room is no more booked for your meeting after no-show situation for 15min, the room is now available for booking. \nThank you for your understanding");
                        notification.setNotificationSent(true);
                        meetingRoom room = roomService.getRoom(booking.getRoomId()).get();
                        room.setStatus(RoomStatus.AVAILABLE);
                        roomService.updateRoom(room.getId(), room);
                        emailReminderService.updateBookingStatus(booking.getId(), booking);

                    }
                }
            }

        }

    }
}
