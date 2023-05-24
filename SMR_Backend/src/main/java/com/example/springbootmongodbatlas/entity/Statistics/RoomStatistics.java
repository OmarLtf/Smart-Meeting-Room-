package com.example.springbootmongodbatlas.entity.Statistics;

public class RoomStatistics {
    private String roomName;
    private String roomColor;
    private int occurrences;

    public RoomStatistics(String roomName, String roomColor, int occurrences) {
        this.roomName = roomName;
        this.roomColor = roomColor;
        this.occurrences = occurrences;
    }

    public void setRoomName(String roomName) {
        this.roomName = roomName;
    }

    public void setRoomColor(String roomColor) {
        this.roomColor = roomColor;
    }

    public void setOccurrences(int occurrences) {
        this.occurrences = occurrences;
    }

    public String getRoomName() {
        return roomName;
    }

    public String getRoomColor() {
        return roomColor;
    }

    public int getOccurrences() {
        return occurrences;
    }

    @Override
    public String toString() {
        return "Room Name: " + roomName + ", Room Color: " + roomColor + ", Occurrences: " + occurrences;
    }
}