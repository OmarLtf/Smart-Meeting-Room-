package com.example.springbootmongodbatlas.entity.Notifications;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "Notifications")
public class Notifications {
    @Id
    private Integer id;
    private NotifType notifType;
    private Date

}
