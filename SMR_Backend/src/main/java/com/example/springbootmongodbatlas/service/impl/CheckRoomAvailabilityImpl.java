package com.example.springbootmongodbatlas.service.impl;

import com.example.springbootmongodbatlas.entity.Bookings.Booking;
import com.example.springbootmongodbatlas.entity.Devices.Device;
import com.example.springbootmongodbatlas.entity.Notifications.Notification;
import com.example.springbootmongodbatlas.entity.Notifications.NotificationType;
import com.example.springbootmongodbatlas.entity.Rooms.RoomStatus;
import com.example.springbootmongodbatlas.entity.Rooms.meetingRoom;
import com.example.springbootmongodbatlas.repo.DeviceRepository;
import com.example.springbootmongodbatlas.repo.RoomRepository;
import com.example.springbootmongodbatlas.service.BookingService;
import com.example.springbootmongodbatlas.service.CheckRoomAvailability;
import com.example.springbootmongodbatlas.service.DeviceService;
import com.example.springbootmongodbatlas.service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import javax.sound.midi.SysexMessage;
import java.awt.print.Book;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

@Service
public class CheckRoomAvailabilityImpl implements CheckRoomAvailability {

    @Autowired
    private RoomService roomService;
    @Autowired
    private DeviceService deviceService;

    @Autowired
    private BookingService bookingService;

    NotificationType notifType;

    @Scheduled(fixedRate = 1000L)
    @Override
    public void UpdateRoomStatusFromDevice() {
        List<meetingRoom> rooms = roomService.getAllRooms(); // Assuming a method to fetch all rooms from the repository
        for (meetingRoom room : rooms) {

            List<Integer> roomDeviceIDs = room.getRoomDevices();
            Date DateTimeNow = new Date();
            List<Booking> meetingsInProgress = bookingService.findMeetingsInProgress(room.getId(), DateTimeNow);
            Boolean meetingInProgress = meetingsInProgress.size() > 0;
            Boolean meetingCancled = false;
            if ( meetingInProgress) {
                for(Notification notification : meetingsInProgress.get(0).getNotifications()){
                    if(notification.getNotificationType() == notifType.CANCELLATION){
                        meetingCancled = notification.getNotificationSent();
                    }
                }
            }

            List<Device> devices = new ArrayList<>();
            for( Integer deviceID : roomDeviceIDs){
                devices.add(deviceService.getDevice(deviceID));
            }

            boolean allDevicesAvailable = devices.stream().allMatch(device -> {

                return device.getRoomStatus().equals(RoomStatus.AVAILABLE);
            });


            if (allDevicesAvailable && !meetingInProgress) {
                room.setStatus(RoomStatus.AVAILABLE);
                roomService.updateRoom(room.getId(), room);
            } else if ( allDevicesAvailable && meetingInProgress & !meetingCancled) {

                room.setStatus(RoomStatus.PANDING);
                roomService.updateRoom(room.getId(), room);

            } else if ( allDevicesAvailable && meetingInProgress & meetingCancled){
                room.setStatus(RoomStatus.AVAILABLE);
                roomService.updateRoom(room.getId(), room);
            } else if (!allDevicesAvailable) {
                room.setStatus(RoomStatus.OCCUPIED);
                roomService.updateRoom(room.getId(), room);
            }
        }
    }

    @Override
    public Date getNextMeeting(Integer id) {
        return null;
    }

    @Override
    public void updateRoomStatusFromMeetings(){
        List<meetingRoom> rooms = roomService.getAllRooms();
    }
}
