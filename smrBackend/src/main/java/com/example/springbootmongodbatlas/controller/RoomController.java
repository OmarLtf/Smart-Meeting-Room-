package com.example.springbootmongodbatlas.controller;

import com.example.springbootmongodbatlas.entity.Product;
import com.example.springbootmongodbatlas.entity.meetingRoom;
import com.example.springbootmongodbatlas.service.ProductService;
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
    public List<meetingRoom> getRoom() {
       return roomService.getRoom();
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
