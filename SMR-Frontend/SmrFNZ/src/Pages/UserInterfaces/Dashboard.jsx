import Calandar from "../../UserDashboard/Calander.jsx";
import MeetingsList from "../../UserDashboard/MeetingsList.jsx";
import RoomCard from "../../UserDashboard/RoomCard.jsx";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const rooms = [
  {
    room: "Carthage",
    status: "AVAILABLE",
    nextMeetingTime: "14:30",
  },
  {
    room: "Hannon",
    status: "PANDING",
    nextMeetingTime: "15:00",
  },
  {
    room: "Spark",
    status: "OCCUPIED",
    nextMeetingTime: "16:00",
  },
  {
    room: "Hannibal",
    status: "AVAILABLE",
    nextMeetingTime: "17:30",
  },
  {
    room: "Oasis",
    status: "OCCUPIED",
    nextMeetingTime: "18:00",
  },
  {
    room: "Room 6",
    status: "AVAILABLE",
    nextMeetingTime: "19:30",
  },
  {
    room: "Room 7",
    status: "AVAILABLE",
    nextMeetingTime: "20:00",
  },
];

const UserDashboard = () => {
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
          {rooms.map((value, index) => (
            <RoomCard key={index} props={value}></RoomCard>
          ))}
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
