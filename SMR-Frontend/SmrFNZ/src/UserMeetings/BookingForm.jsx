/*

- Meeting Title 
- Day 
- StartTime 
- EndTime
- Room
- Invite People (send e-mail)
- Commments ( If invites people )

*/
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers";

import Axios from "axios";

export default function FormPropsTextFields({
  meetingAdded,
  handleMeetingAdded,
}) {
  const [meetingRoom, setMeetingRoom] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [date, setDate] = React.useState("");
  const [startTime, setStartTime] = React.useState(null);
  const [endTime, setEndTime] = React.useState(null);
  const [availableRooms, setAvailableRooms] = React.useState([]);

  const handleStartTimeChange = (value) => {
    if (date) {
      const updatedStartTime = value.set("date", date.date());
      const selectedMonth = date.month();
      const finalStartTime = updatedStartTime.month(selectedMonth);
      setStartTime(finalStartTime);
    } else {
      const finalStartTime = value;
      setStartTime(finalStartTime);
    }
  };

  const handleEndTimeChange = (value) => {
    if (date) {
      const updatedEndTime = value.set("date", date.date());
      const selectedMonth = date.month();
      const finalEndTime = updatedEndTime.month(selectedMonth);
      setEndTime(finalEndTime);
    } else {
      const finalEndTime = value;
      setEndTime(finalEndTime);
    }
  };
  // Handle Change for Meeting Room Select Input

  // Handle Click for Save Button
  const [loading, setLoading] = React.useState(false);
  // function handleClick() {
  //   setLoading(true);

  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 500);
  // }
  const saveMeeting = () => {
    setLoading(true);

    // Fetch existing meeting IDs from the database
    Axios.get("http://localhost:8080/api/booking/all").then((response) => {
      const existingIDs = response.data.map((item) => item.id);
      let newID = 0;

      // Generate a new random ID until it doesn't exist in the database
      do {
        newID = Math.floor(Math.random() * 1000);
      } while (existingIDs.includes(newID));

      Axios.post("http://localhost:8080/api/booking/insert", {
        id: newID,
        roomId: meetingRoom,
        title: title,
        userId: 5678,
        startTime: startTime,
        endTime: endTime,
        bookingStatus: "PENDING",
        notifications: [
          {
            notificationType: "REMINDER",
            notificationSent: false,
          },
          {
            notificationType: "CONFIRMATION",
            notificationSent: false,
          },
          {
            notificationType: "CANCELLATION",
            notificationSent: false,
          },
        ],
      }).then(() => {
        handleMeetingAdded(!meetingAdded);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      });
    });
  };
  React.useEffect(() => {
    Axios.get("http://localhost:8080/api/rooms/all").then((response) => {
      setAvailableRooms(response.data);
      console.log(response.data);
    });

    console.log(availableRooms);
  }, []);

  return (
    <Box
      component="form"
      sx={{
        padding: "5px",
        marginRight: "10px",
        // borderRadius: "10px",
        // backgroundColor: "gray",
        // padding: "20px",
        maxWidth: "45ch",

        "& .MuiTextField-root": { m: 1, width: "40ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <DemoContainer components={["TimePicker"]}>
          <TextField
            sx={{
              backgroundColor: "white",
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
              boxShadow: "0 0 4px rgba(0, 0, 0, 0.1)",
              borderRadius: "5px",
            }}
            required
            id="outlined-required"
            label="Meeting Title"
            defaultValue=""
            onChange={(event) => setTitle(event.target.value)}
          />
        </DemoContainer>

        <DemoContainer components={["TimePicker"]}>
          {/* <FormControl sx={{ m: 1, minWidth: "40ch" }}> */}

          <FormControl fullWidth sx={{ m: 1, maxWidh: "40ch" }}>
            <InputLabel id="demo-simple-select-helper-label">
              Meeting Room
            </InputLabel>
            <Select
              sx={{
                backgroundColor: "white",
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                boxShadow: "0 0 4px rgba(0, 0, 0, 0.1)",
                borderRadius: "5px",
              }}
              required
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={meetingRoom}
              label="Meeting Room"
              onChange={(event) => {
                console.log(event.target.value);
                setMeetingRoom(event.target.value);
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {/* <MenuItem value={"Carthage"}>Carthage</MenuItem>
              <MenuItem value={"Hannon"}>Hannon</MenuItem>
              <MenuItem value={"Annibal"}>Annibal</MenuItem>
              <MenuItem value={"Cantine"}>Cantine</MenuItem> */}
              {availableRooms.map((item, index) => (
                <MenuItem key={index} value={item.id}>
                  {item.roomName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </DemoContainer>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker
              sx={{
                backgroundColor: "white",
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                boxShadow: "0 0 4px rgba(0, 0, 0, 0.1)",
                borderRadius: "5px",
              }}
              required
              label="Basic date picker"
              onChange={(value) => {
                console.log(value);
                setDate(value);
              }}
            />
          </DemoContainer>
        </LocalizationProvider>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["TimePicker"]}>
            <TimePicker
              sx={{
                backgroundColor: "white",
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                boxShadow: "0 0 4px rgba(0, 0, 0, 0.1)",
                borderRadius: "5px",
              }}
              required
              label="Start Time"
              onChange={handleStartTimeChange}
            />
          </DemoContainer>
        </LocalizationProvider>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["TimePicker"]}>
            <TimePicker
              sx={{
                backgroundColor: "white",
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                boxShadow: "0 0 4px rgba(0, 0, 0, 0.1)",
                borderRadius: "5px",
              }}
              required
              label="End Time"
              onChange={handleEndTimeChange}
            />
          </DemoContainer>
        </LocalizationProvider>
      </div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          mt: 2,
          marginRight: "4ch",
        }}
      >
        <LoadingButton
          color="secondary"
          onClick={saveMeeting}
          loading={loading}
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="contained"
        >
          <span>Save</span>
        </LoadingButton>
      </Box>
    </Box>
  );
}
