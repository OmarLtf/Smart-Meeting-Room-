package com.example.springbootmongodbatlas.entity.Bookings;

import com.example.springbootmongodbatlas.entity.Notifications.Notification;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;

@Document(collection = "Bookings")
public class Booking {
    @Id
    private Integer id;
    private Integer roomId;
    private Integer userId;

    private String title;
    private Date startTime;
    private Date endTime;
    private BookingStatus bookingStatus;
    private List<Notification> notifications;

    public Booking(Integer id, String title, Integer roomId, Integer userId, Date startTime, Date endTime) {
        this.id = id;
        this.title = title;
        this.roomId = roomId;
        this.userId = userId;
        this.startTime = startTime;
        this.endTime = endTime;
    }


    public String getTitle() { return title;}

    public void setTitle(String title){ this.title = title;}
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getRoomId() {
        return roomId;
    }

    public void setRoomId(Integer roomId) {
        this.roomId = roomId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Date getStartTime() {
        return startTime;
    }

    public void setStartTime(Date startTime) {
        this.startTime = startTime;
    }

    public Date getEndTime() {
        return endTime;
    }

    public void setEndTime(Date endTime) {
        this.endTime = endTime;
    }

    public BookingStatus getBookingStatus() {
        return bookingStatus;
    }

    public void setBookingStatus(BookingStatus bookingStatus) {
        this.bookingStatus = bookingStatus;
    }

    public List<Notification> getNotifications() {
        return notifications;
    }

    public void setNotifications(List<Notification> notifications) {
        this.notifications = notifications;
    }
}
