package com.example.springbootmongodbatlas.service;

import com.example.springbootmongodbatlas.entity.Rooms.meetingRoom;

import java.util.List;

public interface RoomService {

    public meetingRoom getRoom(int id);
    public List<meetingRoom> getAllRooms();

    public meetingRoom addRoom(meetingRoom room);

    public meetingRoom deleteRoom(int id );

    public meetingRoom updateRoom(int id , meetingRoom room);
}
