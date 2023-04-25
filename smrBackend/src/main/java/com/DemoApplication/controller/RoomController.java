package com.DemoApplication.controller;

import com.DemoApplication.service.RoomService;
import com.DemoApplication.dto.meetingRoomDTO;
import com.DemoApplication.model.meetingRoom;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rooms")
public class RoomController {

    private final RoomService roomService;

    public RoomController(RoomService roomService) {
        this.roomService = roomService;
    }


    @PostMapping
    public ResponseEntity<meetingRoom> createRoom(@RequestBody meetingRoomDTO roomDTO) {
        meetingRoom room = roomService.createRoom(roomDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(room);
    }

//    @GetMapping
  //  public ResponseEntity<List<meetingRoom>> getAllRooms() {
    //    List<meetingRoom> rooms = roomService.getAllRooms();
      //  return ResponseEntity.ok(rooms);
    //}

    @GetMapping("/{id}")
    public ResponseEntity<meetingRoom> getRoomById(@PathVariable String id) {
        meetingRoom room = roomService.getRoomById(id);
        return ResponseEntity.ok(room);
    }

//    @PutMapping("/{id}")
    //  public ResponseEntity<meetingRoom> updateRoom(@PathVariable String id, @RequestBody RoomDTO roomDTO) {
    //    meetingRoom room = roomService.updateRoom(id, roomDTO);
    //  return ResponseEntity.ok(room

}
