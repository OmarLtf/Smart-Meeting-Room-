import AddRoomForm from "../../AdminRooms/AddRoomForm.jsx";
import RoomsTable from "../../AdminRooms/RoomsTable.jsx";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

function AdminRooms() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Grid item md={4} xs={12}>
          <Typography m={1} variant="h4" component="h2">
            Add Meeting Room
          </Typography>
          <Divider sx={{ marginRight: "110px" }} />
          <AddRoomForm></AddRoomForm>
        </Grid>
        <Grid item md={8} xs={12}>
          <Typography m={1} variant="h4" component="h2">
            Meeting Rooms
          </Typography>
          <Divider />
          <RoomsTable></RoomsTable>
        </Grid>
        {/* <RoomInformation></RoomInformation> */}
      </Grid>
    </>
  );
}

export default AdminRooms;
