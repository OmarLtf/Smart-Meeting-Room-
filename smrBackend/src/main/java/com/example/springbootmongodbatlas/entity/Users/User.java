package com.example.springbootmongodbatlas.entity.Users;
import com.example.springbootmongodbatlas.entity.Bookings.Booking;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Users")
public class User {
    @Id
    private Integer id;
    private String userName;
    private String userEmail;
    private Booking userBookings;
    private Team userTeam;

    public User(Integer id, String userName, String userEmail, Booking userBookings, Team userTeam) {
        this.id = id;
        this.userName = userName;
        this.userEmail = userEmail;
        this.userBookings = userBookings;
        this.userTeam = userTeam;
    }

    public Integer getId() {
        return id;
    }


    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public Booking getUserBookings() {
        return userBookings;
    }

    public void setUserBookings(Booking userBookings) {
        this.userBookings = userBookings;
    }

    public Team getUserTeam() {
        return userTeam;
    }

    public void setUserTeam(Team userTeam) {
        this.userTeam = userTeam;
    }
}

