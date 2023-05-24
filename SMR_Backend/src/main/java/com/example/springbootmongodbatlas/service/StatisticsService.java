package com.example.springbootmongodbatlas.service;

import com.example.springbootmongodbatlas.entity.Devices.Device;
import com.example.springbootmongodbatlas.entity.Rooms.meetingRoom;
import com.example.springbootmongodbatlas.entity.Statistics.RoomStatistics;
import com.example.springbootmongodbatlas.entity.Users.Team;

import java.util.HashMap;
import java.util.List;

public interface StatisticsService {

    public HashMap<String, RoomStatistics> getMeetingRoomsUsage();

     public HashMap<meetingRoom, HashMap<Team, Integer>> getTeamsMeetingsByRoom();
    public HashMap<String, HashMap<String, Integer> > getTeamsMeetingByMonth(); // January: {team1: 4, team2: 2}

}
