package com.example.springbootmongodbatlas.service;

import com.example.springbootmongodbatlas.entity.meetingRoom;

import java.util.List;

public interface RoomService {

    public List<meetingRoom> getRoom();

    public meetingRoom addRoom(meetingRoom room);

    public meetingRoom deleteRoom(int id );

    public meetingRoom updateRoom(int id , meetingRoom room);
}
