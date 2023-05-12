import BookingForm from "../../UserMeetings/BookingForm.jsx";
import MyMeetingsTable from "../../UserMeetings/MyMeetingsTable.jsx";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const UserMeetings = () => {
  return (
    <>
      <Grid sx={{ height: "91vh" }} container>
        <Grid item xs={12} md={3}>
          <Typography sx={{ padding: "10px" }} variant="h4">
            New Meeting
          </Typography>
          <BookingForm></BookingForm>
        </Grid>

        <Grid item xs={12} md={9}>
          <Typography sx={{ padding: "10px" }} variant="h4">
            My Meeting
          </Typography>
          <MyMeetingsTable></MyMeetingsTable>
        </Grid>
      </Grid>
      {/* <EditMeetingForm></EditMeetingForm> */}
    </>
  );
};

export default UserMeetings;
