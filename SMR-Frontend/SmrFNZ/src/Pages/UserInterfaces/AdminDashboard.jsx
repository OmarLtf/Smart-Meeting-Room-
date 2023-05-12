import MeetingRoomsPieChart from "../../AdminDashboard/MeetingRoomsPieChart.jsx";
import MeetingsCountLineChart from "../../AdminDashboard/MeetingsCountLineChart.jsx";
import TeamsMeetingBarChart from "../../AdminDashboard/TeamsMeetingsBarChart.jsx";
import UsersTable from "../../AdminDashboard/UsersTable.jsx";
import Grid from "@mui/material/Grid";
const AdminDashboard = () => {
  return (
    <>
      {/* <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={2}
        sx={{ height: "100%", maxWidth: "100%" }}
      > */}
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
          }}
          container
          spacing={2}
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <MeetingsCountLineChart></MeetingsCountLineChart>

          <TeamsMeetingBarChart></TeamsMeetingBarChart>
        </Grid>
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Grid item xs={12} md={9}>
            <UsersTable></UsersTable>
          </Grid>
          <Grid item xs={12} md={3}>
            <MeetingRoomsPieChart></MeetingRoomsPieChart>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default AdminDashboard;
