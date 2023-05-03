package com.example.springbootmongodbatlas.service.impl;

import com.example.springbootmongodbatlas.entity.Bookings.Booking;
import com.example.springbootmongodbatlas.entity.Devices.Device;
import com.example.springbootmongodbatlas.repo.BookingRepository;
import com.example.springbootmongodbatlas.repo.DeviceRepository;
import com.example.springbootmongodbatlas.service.BookingService;
import com.example.springbootmongodbatlas.service.DeviceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DeviceServiceImpl implements DeviceService {
    @Autowired
    private DeviceRepository deviceRepository;
    @Override
    public List<Device> getAllDevices() {
        return deviceRepository.findAll();
    }

    @Override
    public Device getDevice( int id ){return deviceRepository.findById(id).get();}


    @Override
    public Device addDevice(Device device){
        return deviceRepository.save(device);
    }

    @Override
    public Device deleteDevice(int id) {
        Device device = deviceRepository.findById(id).get();
        deviceRepository.delete(device);
        return device ;
    }

    @Override
    public Device updateDevice(int id, Device device) {
        Device updatedDevice = deviceRepository.findById(id).get();
        updatedDevice.setDeviceStatus(device.getDeviceStatus());
      deviceRepository.save(updatedDevice);
      return updatedDevice;


    }
}
