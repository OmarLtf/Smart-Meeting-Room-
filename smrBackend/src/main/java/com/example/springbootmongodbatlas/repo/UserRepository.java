package com.example.springbootmongodbatlas.repo;

import com.example.springbootmongodbatlas.entity.Bookings.Booking;
import com.example.springbootmongodbatlas.entity.Users.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User,Integer> {
}
