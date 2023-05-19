package com.example.springbootmongodbatlas.controller;

import com.example.springbootmongodbatlas.entity.Devices.Device;
import com.example.springbootmongodbatlas.service.DeviceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/device")
public class DeviceController {
    @Autowired
    private DeviceService deviceService;
    @CrossOrigin(origins ="http://localhost:5173")
    @GetMapping("/all")
    public List<Device> getAllDevices() {
       return deviceService.getAllDevices();
    }
    @CrossOrigin(origins ="http://localhost:5173")
    @GetMapping("/{id}")
    public Device getDevice(@PathVariable int id ) {
        return deviceService.getDevice(id);
    }

    @CrossOrigin(origins ="http://localhost:5173")
    @PostMapping("/insert")
    public Device insert(@RequestBody Device device){
        return  deviceService.addDevice(device);
    }

    @CrossOrigin(origins ="http://localhost:5173")
    @PutMapping("/update/{id}")
   public Device update(@PathVariable int id,@RequestBody Device device ){
       return deviceService.updateDevice(id, device);
    }

    @CrossOrigin(origins ="http://localhost:5173")
    @DeleteMapping("/delete/{id}")
    public Device delete(@PathVariable int id ){
        return  deviceService.deleteDevice(id);
    }
}
