import Calandar from "../../UserDashboard/Calander.jsx";
import MeetingsList from "../../UserDashboard/MeetingsList.jsx";
import RoomCard from "../../UserDashboard/RoomCard.jsx";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {useEffect, useState} from "react";
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';


const loadingCard = [
  {
    roomName: "Loading",
    status: "Loading",
    nextMeetingTime: "---------",
  },
  {
    roomName: "Loading",
    status: "Loading",
    nextMeetingTime: "---------",
  },
  {
    roomName: "Loading",
    status: "Loading",
    nextMeetingTime: "---------",
  },
];

const UserDashboard = () => {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    const socket = new SockJS('http://localhost:8080/stomp-endpoint');
    const stompClient = Stomp.over(socket);



    const connect = () => {
      stompClient.connect({}, onConnected, onError);
    };

    const onConnected = () => {
      stompClient.subscribe('/topic/updateService', onMessageReceived);
    };

    const onMessageReceived = (payload) => {
      const receivedMessage = JSON.parse(payload.body);
   
      setMessage(receivedMessage);
      console.log("this is a message from websocket ::::");
      // console.log(receivedMessage);
      console.log("-------------------");
      console.log();
      console.log("-------------------");
    };

    const onError = (err) => {
      console.log(err);
    };

    connect();

    // return () => {
    //   stompClient.disconnect();
    // };


  }, []);




  return (
    <>
      <Grid container direction="column" justifyContent="center">
        <Grid
          sx={{
            overflowX: "auto",
            display: "flex",
            flexWrap: "nowrap",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
            position: "relative",
            height: "100%",
          }}
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="baseline"
        >
      {message.length === 0 ? (
        // Show loading state when message array is empty
        loadingCard.map((value, index) => (
          <RoomCard key={index} props={value}></RoomCard>
        ))
      ) : (
        // Render RoomCard components when message array has data
        message.map((value, index) => (
          <RoomCard key={index} props={value}></RoomCard>
        ))
      )}
        </Grid>

        <Grid container direction="row">
          <Grid
            item
            sx={{
              backgroundColor: "#F6F6F6",
              padding: "20px",
              borderRadius: "5px",
            }}
            xs={12}
            md={9}
          >
            <Calandar></Calandar>
          </Grid>
          <Grid
            md={3}
            xs={12}
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Typography
              sx={{ padding: "10px", marginTop: "10px" }}
              variant="h5"
            >
              Upcoming meetings
            </Typography>
            <MeetingsList></MeetingsList>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default UserDashboard;
