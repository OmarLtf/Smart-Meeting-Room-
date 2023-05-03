package com.example.springbootmongodbatlas;

import com.example.springbootmongodbatlas.service.EmailReminderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class SpringbootMongodbAtlasApplication {
    @Autowired
    private EmailReminderService senderService;

    public static void main(String[] args) {
        SpringApplication.run(SpringbootMongodbAtlasApplication.class, args);
    }


}
