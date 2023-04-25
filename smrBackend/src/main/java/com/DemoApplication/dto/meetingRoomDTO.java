package com.DemoApplication.dto;
import com.DemoApplication.model.Status;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
@Document(collection = "MeetingRooms")
public class meetingRoomDTO {
    private Status status;
    private int capacity;
    private List<String> equipments;

    // constructors, getters and setters
    public meetingRoomDTO(Status status, int capacity, List<String> equipments) {
        this.status = status;
        this.capacity = capacity;
        this.equipments = equipments;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public List<String> getEquipments() {
        return equipments;
    }

    public void setEquipments(List<String> equipments) {
        this.equipments = equipments;
    }
}