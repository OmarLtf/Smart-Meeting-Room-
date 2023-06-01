package com.example.springbootmongodbatlas.entity.Devices;
import com.example.springbootmongodbatlas.entity.Rooms.RoomStatus;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Devices")
public class Device {
    @Id
    private Integer id;
    private String deviceName;
    private RoomStatus roomStatus;
    private DeviceStatus deviceStatus;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public RoomStatus getRoomStatus() {
        return roomStatus;
    }

    public void setRoomStatus(RoomStatus roomStatus) {
        this.roomStatus = roomStatus;
    }

    public DeviceStatus getDeviceStatus() {
        return deviceStatus;
    }

    public void setDeviceStatus(DeviceStatus deviceStatus) {
        this.deviceStatus = deviceStatus;
    }

    public Device(Integer id, String deviceName, RoomStatus roomStatus, DeviceStatus deviceStatus) {
        this.id = id;
        this.deviceName = deviceName;
        this.roomStatus = roomStatus;
        this.deviceStatus = deviceStatus;
    }


    public String getDeviceName() {
        return deviceName;
    }

    public void setDeviceName(String deviceName) {
        this.deviceName = deviceName;
    }
}
