import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import LoadingButton from "@mui/lab/LoadingButton";
import Button from "@mui/material/Button";

import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import EventRepeatIcon from "@mui/icons-material/EventRepeat";
import EditMeetingForm from "./EditMeetingForm.jsx";
import Drawer from "@mui/material/Drawer";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Draggable from "react-draggable";
import Axios from "axios";

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export default function BasicTable() {
  const [userMeetings, setUserMeetings] = useState([]);
  const [state, setState] = useState(false);

  const [open, setOpen] = useState(false);
  const [roomId, setRoomID] = useState();
  const handleDelete = (meetingId) => {
    Axios.delete(`http://localhost:8080/api/booking/delete/${meetingId}`)
      .then((response) => {
        console.log("Meeting deleted successfully");
        console.log(response);
      })
      .catch((error) => {
        console.error("Error deleting meeting:", error);
        // Handle any errors that occur during deletion
      });
  };

  const handleClickOpen = (id) => {
    setRoomID(id);
    setOpen(true);
  };

  const handleConfirm = () => {
    handleDelete(roomId);
    console.log(roomId);
    setRoomID(null);
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const hideDrawerFromChild = (value) => {
    setState(value);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState(open);
  };

  const getUserMeetings = (userId) => {
    Axios.get(`http://localhost:8080/api/booking/userBooking/${userId}`).then(
      (response) => {
        // const parsedObject = JSON.parse(response.data);
        const meetingsArray = Object.values(response.data);
        setUserMeetings(meetingsArray);
        console.log(userMeetings);
      }
    );
  };

  useEffect(() => {
    getUserMeetings(5678);
  });

  const getDate = (value) => {
    const dateObj = new Date(value);
    return dateObj.toLocaleDateString();
  };

  const getTime = (value) => {
    const dateObj = new Date(value);
    return dateObj.toLocaleTimeString();
  };

  return (
    <>
      <TableContainer component={Paper} sx={{ maxWidth: 1200, maxHeight: 470 }}>
        <Table sx={{ minWidth: 650, maxWidth: 1200 }} aria-label="simple table">
          <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
            <TableRow>
              <TableCell>
                <b>Meetings</b>
              </TableCell>
              <TableCell align="right">
                <b>Meeting Room</b>
              </TableCell>
              <TableCell align="right">
                <b>Date</b>
              </TableCell>
              <TableCell align="right">
                <b>Time</b>
              </TableCell>
              <TableCell align="right">
                <b>Edit</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userMeetings.map((row, index) => (
              <TableRow
                hover
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell align="right">
                  <LoadingButton
                    sx={{
                      backgroundColor:
                        row.roomId === 1
                          ? "#f15bb5"
                          : row.roomId === 2
                          ? "#00bbf9"
                          : row.roomId === 3
                          ? "#02dbbe"
                          : "#f5db36",
                      "&:hover": {
                        backgroundColor:
                          row.roomId === 1
                            ? "#f15bb5"
                            : row.roomId === 2
                            ? "#00bbf9"
                            : row.roomId === 3
                            ? "#02dbbe"
                            : "#f5db36",
                        boxShadow: "none",
                      },

                      boxShadow: "none",
                    }}
                    size="small"
                    color="secondary"
                    variant="contained"
                  >
                    <span>
                      <b>
                        {row.roomId === 1
                          ? "Carthage"
                          : row.roomId === 2
                          ? "Hannon"
                          : row.roomId === 3
                          ? "Annibal"
                          : row.roomId === 4
                          ? "Cantine"
                          : "room"}
                      </b>
                    </span>
                  </LoadingButton>
                </TableCell>
                <TableCell align="right">{getDate(row.startTime)}</TableCell>
                <TableCell align="right">
                  {getTime(row.startTime) + " -" + getTime(row.endTime)}
                </TableCell>
                <TableCell align="right">
                  <Button
                    sx={{ marginRight: "10px" }}
                    size="small"
                    variant="outlined"
                    startIcon={<HighlightOffIcon />}
                    onClick={() => {
                      handleClickOpen(row.id);
                    }}
                  >
                    cancel
                  </Button>
                  <Button
                    size="small"
                    variant="contained"
                    endIcon={<EventRepeatIcon />}
                    onClick={toggleDrawer(true)}
                  >
                    postpone
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Drawer
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "#F6F6F6",
          },
        }}
        anchor="right"
        open={state}
        onClose={toggleDrawer(false)}
      >
        <EditMeetingForm hideDrawer={hideDrawerFromChild}></EditMeetingForm>
      </Drawer>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          PaperComponent={PaperComponent}
          aria-labelledby="draggable-dialog-title"
        >
          <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
            Cancel Meeting
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to cancel this meeting?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Discard
            </Button>
            <Button onClick={handleConfirm}>Confirm</Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}
