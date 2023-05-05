package com.example.springbootmongodbatlas.repo;

import com.example.springbootmongodbatlas.entity.Notifications.Notification;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface NotificationRepository extends MongoRepository<Notification,Integer> {
}
