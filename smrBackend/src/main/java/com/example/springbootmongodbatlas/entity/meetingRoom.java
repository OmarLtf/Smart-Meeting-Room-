package com.example.springbootmongodbatlas.entity;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
@Document(collection = "MeetingRoom")
public class meetingRoom {
    @Id
    private String id;
    private Status status;
    private int capacity;
    private List<String> equipments;
    // constructors, getters and setters
    public meetingRoom(String id, Status status, int capacity, List<String> equipments) {
        this.id = id;
        this.status = status;
        this.capacity = capacity;
        this.equipments = equipments;
    }

    public meetingRoom() {
    }

    public String getId() {
        return id;
    }

    public Status getStatus() {
        return status;
    }

    public int getCapacity() {
        return capacity;
    }

    public List<String> getEquipments() {
        return equipments;
    }

    public void setId(String id) {
        this.id = id;
    }


    public void setStatus(Status status) {
        this.status = status;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public void setEquipments(List<String> equipments) {
        this.equipments = equipments;
    }


}

