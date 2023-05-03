package com.example.springbootmongodbatlas.service;

import com.example.springbootmongodbatlas.entity.Bookings.Booking;
import com.example.springbootmongodbatlas.entity.Devices.Device;

import java.util.List;

public interface DeviceService {

    public Device getDevice(int id);
    public List<Device> getAllDevices();

    public Device addDevice(Device device);
    public Device deleteDevice(int id );

    public Device updateDevice(int id , Device device);

}