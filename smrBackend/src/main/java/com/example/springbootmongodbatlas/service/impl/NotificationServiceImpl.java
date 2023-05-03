package com.example.springbootmongodbatlas.service.impl;

import com.example.springbootmongodbatlas.entity.Notifications.Notification;
import com.example.springbootmongodbatlas.entity.Rooms.meetingRoom;
import com.example.springbootmongodbatlas.repo.NotificationRepository;
import com.example.springbootmongodbatlas.repo.RoomRepository;
import com.example.springbootmongodbatlas.service.NotificationService;
import com.example.springbootmongodbatlas.service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NotificationServiceImpl implements NotificationService {
    @Autowired
    private NotificationRepository notificationRepository;

    @Override
    public Notification getNotification(int id ){return notificationRepository.findById(id).get();}


    @Override
    public Notification addNotification(Notification notification) {
        return notificationRepository.save(notification);
    }

    @Override
    public Notification updateNotification(int id, Notification notification) {
        Notification updatedNotification = notificationRepository.findById(id).get();
        updatedNotification.setNotificationSent(notification.getNotificationSent());
        return notificationRepository.save(updatedNotification);
    }
}
