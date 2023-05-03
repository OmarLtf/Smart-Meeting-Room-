package com.example.springbootmongodbatlas.service;

import com.example.springbootmongodbatlas.entity.Notifications.Notification;
import com.example.springbootmongodbatlas.entity.Notifications.NotificationType;
import com.example.springbootmongodbatlas.entity.Rooms.meetingRoom;

import java.util.List;

public interface NotificationService {

    public Notification getNotification(int id);

    public Notification addNotification(Notification notification);

    public Notification updateNotification(int id , Notification notification);
}
