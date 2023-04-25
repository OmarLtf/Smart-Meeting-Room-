package com.DemoApplication.service;

import com.DemoApplication.repository.RoomRepository;
import com.DemoApplication.dto.meetingRoomDTO;
import com.DemoApplication.model.meetingRoom;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoomServiceMethods implements RoomService {

    private RoomRepository roomRepository;


    @Override
    public meetingRoom createRoom(meetingRoomDTO roomDTO) {
        meetingRoom room = new meetingRoom();
        room.setStatus(roomDTO.getStatus());
        room.setCapacity(roomDTO.getCapacity());
        room.setEquipments(roomDTO.getEquipments());
        return roomRepository.save(room);
    }

    @Override
    public List<meetingRoom> getAllRooms() {
        return roomRepository.findAll();
    }

    @Override
    public meetingRoom getRoomById(String id) {
        return roomRepository.findById(id).orElseThrow(() -> new RuntimeException("Room not found"));
    }

    @Override
    public meetingRoom updateRoom(String id, meetingRoomDTO roomDTO) {
        meetingRoom room = getRoomById(id);
        room.setStatus(roomDTO.getStatus());
        room.setCapacity(roomDTO.getCapacity());
        room.setEquipments(roomDTO.getEquipments());
        return roomRepository.save(room);
    }

    @Override
    public void deleteRoom(String id) {
        meetingRoom room = getRoomById(id);
        roomRepository.delete(room);
    }

}
