import Calandar from "../../UserDashboard/Calander.jsx";
import MeetingsList from "../../UserDashboard/MeetingsList.jsx";
import RoomCard from "../../UserDashboard/RoomCard.jsx";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

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
          <RoomCard></RoomCard>
          <RoomCard></RoomCard>
          <RoomCard></RoomCard>
          <RoomCard></RoomCard>
          <RoomCard></RoomCard>
          <RoomCard></RoomCard>
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
