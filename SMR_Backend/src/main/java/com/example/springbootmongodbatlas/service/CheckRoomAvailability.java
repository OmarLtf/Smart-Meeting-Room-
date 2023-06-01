package com.example.springbootmongodbatlas.service;

import java.util.Date;

public interface CheckRoomAvailability {
    public void UpdateRoomStatusFromDevice();
    public Date getNextMeeting(Integer id);
    public void updateRoomStatusFromMeetings();


}
