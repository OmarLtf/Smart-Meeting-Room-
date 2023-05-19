package com.example.springbootmongodbatlas.entity.Rooms;
import com.example.springbootmongodbatlas.entity.Bookings.Booking;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
@Document(collection = "MeetingRoom")
public class meetingRoom {
    @Id
    private Integer id;
    private String roomName;
    private String name;

    private RoomStatus status;
    private int capacity;
    private List<String> equipments;
    private String roomLocation;

    private List<Integer> roomDevices;
    private List<Booking> roomBooking;
    private String color;
    // constructors, getters and setters
    public meetingRoom(int id, String roomName, RoomStatus status, int capacity, List<String> equipments, String roomLocation, List<Integer> roomDevices, List<Booking> roomBooking, String color) {
        this.id = id;
        this.roomName = roomName;
        this.status = status;
        this.capacity = capacity;
        this.equipments = equipments;
        this.roomLocation = roomLocation;
        this.roomDevices = roomDevices;
        this.roomBooking = roomBooking;
        this.color = color;
    }

    public meetingRoom() {
    }

    public Integer getId() {
        return id;
    }

    public RoomStatus getStatus() {
        return status;
    }

    public int getCapacity() {
        return capacity;
    }

    public List<String> getEquipments() {
        return equipments;
    }

    public void setId(int id) {
        this.id = id;
    }


    public void setStatus(RoomStatus status) {
        this.status = status;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public void setEquipments(List<String> equipments) {
        this.equipments = equipments;
    }


    public List<Integer> getRoomDevices() {
        return roomDevices;
    }

    public void setRoomDevices(List<Integer> roomDevices) {
        this.roomDevices = roomDevices;
    }

    public List<Booking> getRoomBooking() {
        return roomBooking;
    }

    public void setRoomBooking(List<Booking> roomBooking) {
        this.roomBooking = roomBooking;
    }

    public String getRoomName() {
        return roomName;
    }

    public void setRoomName(String roomName) {
        this.roomName = roomName;
    }

    public String getRoomLocation() {
        return roomLocation;
    }

    public void setRoomLocation(String roomLocation) {
        this.roomLocation = roomLocation;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }
}

