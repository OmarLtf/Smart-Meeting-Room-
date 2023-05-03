package com.example.springbootmongodbatlas.service.impl;

import com.example.springbootmongodbatlas.entity.Bookings.Booking;
import com.example.springbootmongodbatlas.entity.Users.User;
import com.example.springbootmongodbatlas.repo.UserRepository;
import com.example.springbootmongodbatlas.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;
    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User getUser( int id ){return userRepository.findById(id).get();}


    @Override
    public User addUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public User deleteUser(int id) {
        User user = userRepository.findById(id).get();
        userRepository.delete(user);
        return user;
    }

    @Override
    public User updateUser(int id, User user) {
        User updatedUser = userRepository.findById(id).get();
        updatedUser.setUserBookings(user.getUserBookings());
        updatedUser.setUserEmail(user.getUserEmail());
        updatedUser.setUserName(user.getUserName());
        updatedUser.setUserTeam(user.getUserTeam());
      userRepository.save(updatedUser);
      return updatedUser;


    }
}
