package com.DemoApplication.service;

import com.DemoApplication.dto.meetingRoomDTO;
import com.DemoApplication.model.meetingRoom;

import java.util.List;

public interface RoomService {
    meetingRoom createRoom(meetingRoomDTO roomDTO);
    List<meetingRoom> getAllRooms();
    meetingRoom getRoomById(String id);
    meetingRoom updateRoom(String id, meetingRoomDTO roomDTO);
    void deleteRoom(String id);
}


