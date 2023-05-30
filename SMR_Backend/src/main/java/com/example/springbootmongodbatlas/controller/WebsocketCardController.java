package com.example.springbootmongodbatlas.controller;

import com.example.springbootmongodbatlas.entity.Rooms.RoomStatus;
import com.example.springbootmongodbatlas.entity.Rooms.meetingRoom;
import com.example.springbootmongodbatlas.repo.RoomRepository;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;
import java.util.List;

@Controller
public class WebsocketCardController {
    @Autowired
    private RoomRepository roomRepository;


    @Autowired
    private SimpMessagingTemplate template;

    private ObjectMapper objectMapper = new ObjectMapper();
    @Scheduled(fixedRate = 1000L)
    public void getMessage() throws JsonProcessingException {
        List<meetingRoom>  rooms = roomRepository.findAll();
        List<RoomStatus> roomStatusList = new ArrayList<>();
        for (meetingRoom room : rooms) {
            roomStatusList.add(room.getStatus());
        }

        String json = objectMapper.writeValueAsString(rooms);


        this.template.convertAndSend("/topic/updateService", json);
    }
/*    public void updateRoomStatus(){
        List<meetingRoom>  rooms = roomRepository.findAll();
        List<RoomStatus> roomStatusList = new ArrayList<>();
        for (meetingRoom room : rooms) {
            roomStatusList.add(room.getStatus());
        }

        messagingTemplate.convertAndSend("/roomStatusUpdate", roomStatusList);


    }
    */

}
