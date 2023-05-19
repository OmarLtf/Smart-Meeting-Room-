import { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import DialogTitle from "@mui/material/DialogTitle";
import "./styling/calendarStyle.css";
import LoadingButton from "@mui/lab/LoadingButton";
import Grid from "@mui/material/Grid";
import Axios from "axios";
import DateRangeIcon from "@mui/icons-material/DateRange";

const CalendarComponent = () => {
  const [open, setOpen] = useState(false);
  const [dialogEvent, setDialogEvent] = useState({});

  const handleClickOpen = (value) => {
    // console.log(value);
    // console.log(value.title);
    // console.log(value.start);
    // console.log(value.end);
    // console.log(value.extendedProps.room);
    // console.log(value);
    setDialogEvent(value);
    console.log(dialogEvent);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [meetings, setMeetings] = useState([]);

  const getAllMeetings = () => {
    Axios.get("http://localhost:8080/api/booking/all")
      .then((response) => {
        const meetings = response.data;

        const getRoomDetails = (roomId) => {
          return Axios.get(`http://localhost:8080/api/rooms/${roomId}`)
            .then((response) => response.data)
            .catch((error) => {
              console.log(
                `Error retrieving room details for roomId: ${roomId}`,
                error
              );
              return null;
            });
        };

        const fetchRoomDetailsForMeetings = async () => {
          const updatedMeetings = await Promise.all(
            meetings.map(async (meeting) => {
              const roomDetails = await getRoomDetails(meeting.roomId);
              return {
                id: meeting.id,
                title: meeting.title,
                start: meeting.startTime,
                end: meeting.endTime,
                room: roomDetails,
              };
            })
          );

          setMeetings(updatedMeetings);
          console.log("Meetings updated successfully");
        };

        fetchRoomDetailsForMeetings();
      })
      .catch((error) => console.log("Error retrieving meetings:", error));
  };

  // const convertMeetingsToEvents = (data) => {};
  useEffect(() => {
    getAllMeetings();
  }, []);

  const dayCellClassNames = (args) => {
    const today = new Date().toISOString().split("T")[0]; // Get today's date in ISO format
    if (args.dateStr === today) {
      return "pink-cell"; // Add the custom CSS class for pink background color
    }
    return "";
  };

  return (
    <>
      <FullCalendar
        height={600}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={meetings}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        eventClick={(value) => {
          handleClickOpen(value.event);
        }}
        dayCellClassNames={dayCellClassNames}
      />
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          {dialogEvent.extendedProps && dialogEvent.extendedProps.room && (
            <>
              <DialogContent>
                <Grid
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <DialogTitle
                    sx={{ padding: 0, marginRight: 20 }}
                    id="alert-dialog-title"
                  >
                    <Typography variant="h5">{dialogEvent.title}</Typography>
                  </DialogTitle>
                  <LoadingButton
                    sx={{
                      backgroundColor: dialogEvent.extendedProps.room
                        ? dialogEvent.extendedProps.room.color
                        : "",
                      "&:hover": {
                        backgroundColor: dialogEvent.extendedProps.room
                          ? dialogEvent.extendedProps.room.color
                          : "",
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
                        {dialogEvent.extendedProps.room
                          ? dialogEvent.extendedProps.room.roomName
                          : ""}
                      </b>
                    </span>
                  </LoadingButton>
                </Grid>

                <div>
                  <Grid
                    sx={{
                      margin: "5px",
                      marginTop: "30px",
                      backgroundColor: "#f7f7f7",
                      borderRadius: "5px",
                    }}
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                  >
                    {/* <Typography
                      sx={{ paddingLeft: "10px" }}
                      variant="h6"
                      gutterBottom
                    >
                      Date :
                    </Typography> */}
                    <DateRangeIcon
                      sx={{
                        paddingLeft: "10px",
                        marginRight: "10px",
                        fontSize: 30,
                      }}
                    ></DateRangeIcon>
                    <Typography variant="h6" gutterBottom>
                      {new Date(dialogEvent.start).toLocaleDateString()}
                    </Typography>
                  </Grid>
                  <Grid
                    sx={{
                      margin: "5px",

                      backgroundColor: "#f7f7f7",
                      borderRadius: "5px",
                    }}
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                  >
                    <Typography
                      sx={{ paddingLeft: "10px", paddingRight: "10px" }}
                      variant="h6"
                      gutterBottom
                    >
                      From:
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                      {new Date(dialogEvent.start).toLocaleTimeString()}
                    </Typography>
                  </Grid>
                  <Grid
                    sx={{
                      margin: "5px",

                      backgroundColor: "#f7f7f7",
                      borderRadius: "5px",
                    }}
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                  >
                    <Typography
                      sx={{ paddingLeft: "10px", paddingRight: "10px" }}
                      variant="h6"
                      gutterBottom
                    >
                      To:
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                      {new Date(dialogEvent.end).toLocaleTimeString()}
                    </Typography>
                  </Grid>
                </div>

                {/* <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <Typography variant="h6" gutterBottom>
                    From :
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    {dialogEvent.start}
                  </Typography>
                </Grid>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <Typography variant="h6" gutterBottom>
                    To :
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    {dialogEvent.end}
                  </Typography>
                </Grid> */}
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} autoFocus>
                  OK
                </Button>
              </DialogActions>
            </>
          )}
        </Dialog>
      </div>
    </>
  );
};

export default CalendarComponent;
