package com.example.springbootmongodbatlas.entity.Devices;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Devices")
public class Device {
    @Id
    private Integer id;
    private String connectionString;
    private DeviceStatus deviceStatus;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getConnectionString() {
        return connectionString;
    }

    public void setConnectionString(String connectionString) {
        this.connectionString = connectionString;
    }

    public DeviceStatus getDeviceStatus() {
        return deviceStatus;
    }

    public void setDeviceStatus(DeviceStatus deviceStatus) {
        this.deviceStatus = deviceStatus;
    }

    public Device(Integer id, String connectionString, DeviceStatus deviceStatus) {
        this.id = id;
        this.connectionString = connectionString;
        this.deviceStatus = deviceStatus;
    }


}
