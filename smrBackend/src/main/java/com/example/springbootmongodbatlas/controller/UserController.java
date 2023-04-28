package com.example.springbootmongodbatlas.controller;

import com.example.springbootmongodbatlas.entity.Rooms.meetingRoom;
import com.example.springbootmongodbatlas.service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/rooms")
public class RoomController {
    @Autowired
    private RoomService roomService;
    @GetMapping("/all")
    public List<meetingRoom> getAllRooms() {
       return roomService.getAllRooms();
    }
    @GetMapping("/{id}")
    public meetingRoom getRoom(@PathVariable int id ) {
        System.out.println(roomService.getRoom(id));
        return roomService.getRoom(id);
    }

    @PostMapping("/insert")
    public meetingRoom insert(@RequestBody meetingRoom room){
        return  roomService.addRoom(room);
    }

    @PutMapping("/update/{id}")
   public meetingRoom update(@PathVariable int id,@RequestBody meetingRoom room ){
       return roomService.updateRoom(id,room);
    }

    @DeleteMapping("/delete/{id}")
    public meetingRoom delete(@PathVariable int id ){

        return  roomService.deleteRoom(id);
    }
}
