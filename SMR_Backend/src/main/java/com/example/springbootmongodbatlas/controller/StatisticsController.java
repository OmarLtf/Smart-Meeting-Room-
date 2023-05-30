package com.example.springbootmongodbatlas.controller;

import com.example.springbootmongodbatlas.entity.Rooms.meetingRoom;
import com.example.springbootmongodbatlas.entity.Statistics.RoomStatistics;
import com.example.springbootmongodbatlas.entity.Users.Team;
import com.example.springbootmongodbatlas.service.StatisticsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

@RestController
@RequestMapping("api/statistics")
@Controller
public class StatisticsController {
    @Autowired
    private StatisticsService statisticsService;

    @GetMapping("/pieChart")
    public HashMap<String, RoomStatistics> getMeetingRoomsCount(){
        return statisticsService.getMeetingRoomsUsage();
    }

@Scheduled(fixedRate = 20000L)
    public HashMap<meetingRoom, HashMap<Team, Integer>> getTeamsMeetingsByRoom(){
        return statisticsService.getTeamsMeetingsByRoom();
    }
}
