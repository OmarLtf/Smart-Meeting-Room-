package com.DemoApplication.repository;

import com.DemoApplication.model.meetingRoom;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RoomRepository extends MongoRepository <meetingRoom, String> {

}