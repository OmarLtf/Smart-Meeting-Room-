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
    @CrossOrigin(origins ="http://localhost:5173")
    @GetMapping("/all")
    public List<meetingRoom> getAllRooms() {
       return roomService.getAllRooms();
    }
    @CrossOrigin(origins ="http://localhost:5173")
    @GetMapping("/{id}")
    public meetingRoom getRoom(@PathVariable int id ) {
        System.out.println(roomService.getRoom(id));
        return roomService.getRoom(id);
    }
    @CrossOrigin(origins ="http://localhost:5173")
    @PostMapping("/insert")
    public meetingRoom insert(@RequestBody meetingRoom room){
        return  roomService.addRoom(room);
    }
    @CrossOrigin(origins ="http://localhost:5173")
    @PutMapping("/update/{id}")
   public meetingRoom update(@PathVariable int id,@RequestBody meetingRoom room ){
       return roomService.updateRoom(id,room);
    }
    @CrossOrigin(origins ="http://localhost:5173")
    @DeleteMapping("/delete/{id}")
    public meetingRoom delete(@PathVariable int id ){

        return  roomService.deleteRoom(id);
    }
}
