package com.example.springbootmongodbatlas.repo;

import com.example.springbootmongodbatlas.entity.Rooms.meetingRoom;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RoomRepository extends MongoRepository<meetingRoom,Integer> {
}
