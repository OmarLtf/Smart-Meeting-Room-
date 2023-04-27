package com.example.springbootmongodbatlas.service.impl;

import com.example.springbootmongodbatlas.entity.Product;
import com.example.springbootmongodbatlas.entity.meetingRoom;
import com.example.springbootmongodbatlas.repo.ProductRepo;
import com.example.springbootmongodbatlas.repo.RoomRepository;
import com.example.springbootmongodbatlas.service.ProductService;
import com.example.springbootmongodbatlas.service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoomServiceImpl implements RoomService {
    @Autowired
    private RoomRepository roomRepository;
    @Override
    public List<meetingRoom> getRoom() {
        return roomRepository.findAll();
    }

    @Override
    public meetingRoom addRoom(meetingRoom room) {
        return roomRepository.save(room);
    }

    @Override
    public meetingRoom deleteRoom(int id) {
        meetingRoom room = roomRepository.findById(id).get();
        roomRepository.delete(room);
        return room;
    }

    @Override
    public meetingRoom updateRoom(int id, meetingRoom room) {
        meetingRoom updatedRoom = roomRepository.findById(id).get();
        updatedRoom.setStatus(room.getStatus());
        updatedRoom.setEquipments(room.getEquipments());
        updatedRoom.setCapacity(room.getCapacity());
      roomRepository.save(updatedRoom);
      return updatedRoom;


    }
}
