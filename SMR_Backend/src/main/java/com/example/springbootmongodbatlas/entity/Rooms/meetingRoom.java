package com.example.springbootmongodbatlas.entity.Rooms;
import com.example.springbootmongodbatlas.entity.Bookings.Booking;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
@Document(collection = "MeetingRoom")
public class meetingRoom {
    @Id
    private Integer id;
    private String name;

    private RoomStatus status;
    private int capacity;
    private List<String> equipments;

    private String roomDevices;
    private List<Booking> roomBooking;
    // constructors, getters and setters
    public meetingRoom(int id, RoomStatus status, int capacity, List<String> equipments, String roomDevices, List<Booking> roomBooking) {
        this.id = id;
        this.status = status;
        this.capacity = capacity;
        this.equipments = equipments;
        this.roomDevices = roomDevices;
        this.roomBooking = roomBooking;
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


    public String getRoomDevices() {
        return roomDevices;
    }

    public void setRoomDevices(String roomDevices) {
        this.roomDevices = roomDevices;
    }

    public List<Booking> getRoomBooking() {
        return roomBooking;
    }

    public void setRoomBooking(List<Booking> roomBooking) {
        this.roomBooking = roomBooking;
    }
}

