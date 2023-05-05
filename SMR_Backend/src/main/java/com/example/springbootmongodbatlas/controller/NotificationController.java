package com.example.springbootmongodbatlas.controller;

import com.example.springbootmongodbatlas.entity.Notifications.Notification;
import com.example.springbootmongodbatlas.entity.Rooms.meetingRoom;
import com.example.springbootmongodbatlas.service.NotificationService;
import com.example.springbootmongodbatlas.service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/notif")
public class NotificationController {
    @Autowired
    private NotificationService notificationService;

    @PostMapping("/insert")
    public Notification insert(@RequestBody Notification notification){
        return  notificationService.addNotification(notification);
    }

    @PutMapping("/update/{id}")
   public Notification update(@PathVariable int id,@RequestBody Notification notification ){
       return notificationService.updateNotification(id, notification);
    }

    @GetMapping("/{id}")
    public Notification getNotification(@PathVariable int id) {
        return notificationService.getNotification(id);
    }


}
