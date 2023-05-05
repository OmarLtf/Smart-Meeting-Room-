package com.example.springbootmongodbatlas.service;

import com.example.springbootmongodbatlas.entity.Bookings.Booking;
import com.example.springbootmongodbatlas.entity.Users.User;

import java.util.List;

public interface UserService {

    public User getUser(int id);
    public List<User> getAllUsers();

    public User addUser(User user);

    public User deleteUser(int id );

    public User updateUser(int id , User user);
}
