package com.example.springbootmongodbatlas.controller;

import com.example.springbootmongodbatlas.entity.Bookings.Booking;
import com.example.springbootmongodbatlas.entity.Devices.Device;
import com.example.springbootmongodbatlas.service.BookingService;
import com.example.springbootmongodbatlas.service.DeviceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/device")
public class DeiceController {
    @Autowired
    private DeviceService deviceService;
    @GetMapping("/all")
    public List<Device> getAllDevices() {
       return deviceService.getAllDevices();
    }
    @GetMapping("/{id}")
    public Device getDevice(@PathVariable int id ) {
        return deviceService.getDevice(id);
    }

    @PostMapping("/insert")
    public Device insert(@RequestBody Device device){
        return  deviceService.addDevice(device);
    }

    @PutMapping("/update/{id}")
   public Device update(@PathVariable int id,@RequestBody Device device ){
       return deviceService.updateDevice(id, device);
    }

    @DeleteMapping("/delete/{id}")
    public Device delete(@PathVariable int id ){
        return  deviceService.deleteDevice(id);
    }
}
