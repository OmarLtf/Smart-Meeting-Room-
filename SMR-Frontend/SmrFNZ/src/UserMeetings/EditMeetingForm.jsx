/*
- Meeting Title 
- Day 
- StartTime 
- EndTime
- Room
- Invite People (send e-mail)
- Commments ( If invites people )
*/
import { useState } from "react";
import { Box } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import Axios from "axios";

export default function FormPropsTextFields({ hideDrawer, meetingToUpdate }) {
  // const getDate = (value) => {
  //   const dateObj = new Date(value);
  //   return dateObj.toLocaleDateString();
  // };

  // const getTime = (value) => {
  //   const dateObj = new Date(value);

  //   console.log(dateObj.toLocaleTimeString);
  //   console.log(meeting);
  //   console.log(value);
  //   return dateObj.toLocaleTimeString();
  // };

  const [selectedDate, setSelectedDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);

  // Handle Click for Save Button
  const [loading, setLoading] = useState(false);

  const handleStartTimeChange = (value) => {
    if (selectedDate) {
      const updatedStartTime = value.set("date", selectedDate.date());
      // const finalStartTime = updatedStartTime.add(1, "hour");
      // setStartTime(finalStartTime);
      setStartTime(updatedStartTime);
    }
    //  else {
    //   const finalStartTime = value.add(1, "hour");
    //   setStartTime(finalStartTime);
    //   setStartTime(updatedStartTime);
    // }
  };

  const handleEndTimeChange = (value) => {
    if (selectedDate) {
      const updatedEndTime = value.set("date", selectedDate.date());
      // const finalEndTime = updatedEndTime.add(1, "hour");
      setEndTime(updatedEndTime);
    }
    // else {
    //   const finalEndTime = value.add(1, "hour");
    //   setEndTime(finalEndTime);
    // }
  };

  function handlePostpone() {
    const meetingUpdated = meetingToUpdate;
    meetingUpdated.startTime = startTime;
    meetingUpdated.endTime = endTime;

    Axios.put(
      `http://localhost:8080/api/booking/update/${meetingUpdated.id}`,
      meetingUpdated
    )
      .then((response) => {
        console.log("Meeting updated successfully:", response);
        // Handle the response or perform any necessary actions after successful update
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      })
      .catch((error) => {
        console.error("Error updating meeting:", error);
        // Handle any errors that occur during the update
      });
    hideDrawer(false);
  }

  const hide = () => {
    hideDrawer(false);
  };

  return (
    <Box
      component="form"
      sx={{
        // borderRadius: "10px",
        // backgroundColor: "gray",
        // padding: "20px",
        maxWidth: "45ch",
        "& .MuiTextField-root": { m: 1, width: "45ch" },
      }}
      noValidate
      autoComplete="off"
      margin={5}
    >
      <div>
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
              // dafaultValue={startTime}
              label="Basic date picker"
              onChange={(value) => {
                setSelectedDate(value);
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
              // defaultValue={startTime}
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
              // defaultValue={endTime}
              label="End Time"
              onChange={handleEndTimeChange}
            />
          </DemoContainer>
        </LocalizationProvider>
      </div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          mt: 2,
          marginRight: "4ch",
        }}
      >
        <LoadingButton
          onClick={hide}
          startIcon={<ArrowBackIosNewIcon />}
          variant="contained"
        >
          <span>CANCEL</span>
        </LoadingButton>
        <LoadingButton
          color="secondary"
          onClick={handlePostpone}
          loading={loading}
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="contained"
        >
          <span>Update</span>
        </LoadingButton>
      </Box>
    </Box>
  );
}
