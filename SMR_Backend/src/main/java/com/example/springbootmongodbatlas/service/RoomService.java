package com.example.springbootmongodbatlas.service;

import com.example.springbootmongodbatlas.entity.Rooms.meetingRoom;

import java.util.List;
import java.util.Optional;

public interface RoomService {

    public Optional<meetingRoom> getRoom(int id);
    public List<meetingRoom> getAllRooms();

    public meetingRoom addRoom(meetingRoom room);

    public meetingRoom deleteRoom(int id );

    public meetingRoom updateRoom(int id , meetingRoom room);
}
