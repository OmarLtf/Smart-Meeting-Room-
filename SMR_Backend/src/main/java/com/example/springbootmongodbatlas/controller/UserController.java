package com.example.springbootmongodbatlas.controller;

import com.example.springbootmongodbatlas.entity.Rooms.meetingRoom;
import com.example.springbootmongodbatlas.entity.Users.User;
import com.example.springbootmongodbatlas.service.RoomService;
import com.example.springbootmongodbatlas.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    private UserService userService;
    @GetMapping("/all")
    public List<User> getAllUsers() {
       return userService.getAllUsers();
    }
    @GetMapping("/{id}")
    public User getUser(@PathVariable int id ) {
        return userService.getUser(id);
    }

    @PostMapping("/insert")
    public User insert(@RequestBody User user){
        return  userService.addUser(user);
    }

    @PutMapping("/update/{id}")
   public User update(@PathVariable int id,@RequestBody User user ){
       return userService.updateUser(id, user);
    }

    @DeleteMapping("/delete/{id}")
    public User delete(@PathVariable int id ){

        return userService.deleteUser(id);
    }
}
