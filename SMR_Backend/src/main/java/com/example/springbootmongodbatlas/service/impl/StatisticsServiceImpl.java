package com.example.springbootmongodbatlas.service.impl;

import com.example.springbootmongodbatlas.entity.Bookings.Booking;
import com.example.springbootmongodbatlas.entity.Rooms.meetingRoom;
import com.example.springbootmongodbatlas.entity.Statistics.RoomStatistics;
import com.example.springbootmongodbatlas.entity.Users.Team;
import com.example.springbootmongodbatlas.entity.Users.User;
import com.example.springbootmongodbatlas.repo.*;
import com.example.springbootmongodbatlas.service.StatisticsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class StatisticsServiceImpl implements StatisticsService {
    @Autowired
    private BookingRepository bookingRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoomRepository roomRepository;

    public static Map<Integer, Integer> countOccurrences(List<Integer> numbers) {
        Map<Integer, Integer> occurrences = new HashMap<>();

        // Count the occurrences of each integer
        for (int number : numbers) {
            if (occurrences.containsKey(number)) {
                occurrences.put(number, occurrences.get(number) + 1);
            } else {
                occurrences.put(number, 1);
            }
        }

        return occurrences;
    }

    @Override
    public HashMap<String, RoomStatistics> getMeetingRoomsUsage() {
        List<Booking> allBookings = bookingRepository.findAll();
        List<Integer> roomsIDs = new ArrayList<>();
        HashMap<String, RoomStatistics> roomStatisticsMap = new HashMap<>();

        for (Booking booking : allBookings) {
            roomsIDs.add(booking.getRoomId());
        }

        Map<Integer, Integer> meetingRoomsCount = countOccurrences(roomsIDs);

        for (Map.Entry<Integer, Integer> entry : meetingRoomsCount.entrySet()) {
            Integer roomId = entry.getKey();
            Integer occurrences = entry.getValue();

            meetingRoom roomOptional = roomRepository.findById(roomId).get();
            if (roomOptional!= null) {
                meetingRoom room = roomOptional;
                String roomName = room.getRoomName();
                String roomColor = room.getColor();

                RoomStatistics roomStatistics = new RoomStatistics(roomName, roomColor, occurrences);
                roomStatisticsMap.put(roomName, roomStatistics);
            }
        }

        return roomStatisticsMap;
    }
/*    @Override
    public HashMap<meetingRoom, HashMap<Team, Integer>> getTeamsMeetingsByRoom() {

        List<Booking> bookings = bookingRepository.findAll();

        // Step 1: Create a map to store the occurrences of teams in each meeting room
        HashMap<meetingRoom, HashMap<Team, Integer>> roomTeamsMeetingsMap = new HashMap<>();

        // Step 2: Iterate over each booking
        for (Booking booking : bookings) {
            Integer userId = booking.getUserId();
            Integer roomId = booking.getRoomId();

            // Step 3: Retrieve the user from the userID
            User user = userRepository.findById(userId).orElse(null);

            // Step 4: Check if the user exists and extract the team information
            if (user != null) {
                Team team = user.getUserTeam();
                meetingRoom room = roomRepository.findById(roomId).get();

                // Step 5: Retrieve or create the team occurrences map for the meeting room
                HashMap<Team, Integer> teamOccurrencesMap = roomTeamsMeetingsMap.computeIfAbsent(
                        room , k -> new HashMap<>());

                // Step 6: Increment the occurrences count for the team in the meeting room
                teamOccurrencesMap.put(team, teamOccurrencesMap.getOrDefault(team, 0) + 1);
            }
        }

        return roomTeamsMeetingsMap;
    }

*/


    @Override
public HashMap<meetingRoom, HashMap<Team, Integer>> getTeamsMeetingsByRoom() {

    List<Booking> bookings = bookingRepository.findAll();

    // Step 1: Create a map to store the occurrences of teams in each meeting room
    HashMap<meetingRoom, HashMap<Team, Integer>> roomTeamsMeetingsMap = new HashMap<>();

    // Step 2: Iterate over each booking
    for (Booking booking : bookings) {
        Integer userId = booking.getUserId();
        Integer roomId = booking.getRoomId();

        // Step 3: Retrieve the user from the userID
        User user = userRepository.findById(userId).orElse(null);

        // Step 4: Check if the user exists and extract the team information
        if (user != null) {
            Team team = user.getUserTeam();
            meetingRoom room = roomRepository.findById(roomId).orElse(null);

            if (room != null) {
                // Step 5: Retrieve or create the team occurrences map for the meeting room
                HashMap<Team, Integer> teamOccurrencesMap = roomTeamsMeetingsMap.computeIfAbsent(
                        room, k -> new HashMap<>());

                // Step 6: Increment the occurrences count for the team in the meeting room
                teamOccurrencesMap.put(team, teamOccurrencesMap.getOrDefault(team, 0) + 1);
            }
        }
    }

    return roomTeamsMeetingsMap;
}



    /*  @Override
    public HashMap<String, HashMap<Team, Integer>> getTeamsMeetingsByRoom() {

        List<Booking> bookings = bookingRepository.findAll();

        // Step 1: Get all unique user IDs from bookings
        List<Integer> userIds = bookings.stream()
                .map(Booking::getUserId)
                .distinct()
                .collect(Collectors.toList());

        // Step 2: Retrieve users corresponding to the user IDs
        List<User> users = new ArrayList<>();
        for (Integer userId : userIds) {
            User user = userRepository.findById(userId).get();
            if (user != null) {
                users.add(user);
            }
        }

        // Step 3: Extract team names from users
        List<Team> teamNames = users.stream()
                .map(User::getUserTeam)
                .collect(Collectors.toList());

        // Step 4: Calculate occurrences of each team
        Map<String, Integer> teamOccurrences = new HashMap<>();
        for (Team teamName : teamNames) {
            teamOccurrences.put(String.valueOf(teamName), teamOccurrences.getOrDefault(teamName, 0) + 1);
        }

        return teamOccurrences;
    }
    }
*/
    @Override
    public HashMap<String, HashMap<String, Integer>> getTeamsMeetingByMonth() {
        return null;
    }
}
