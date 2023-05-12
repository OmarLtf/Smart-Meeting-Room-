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
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

export default function FormPropsTextFields() {
  const [meetingRoom, setMeetingRoom] = React.useState("");

  // Handle Change for Meeting Room Select Input
  const handleChange = (event) => {
    setMeetingRoom(event.target.value);
  };

  // Handle Click for Save Button
  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 500);
  }

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
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Carthage"}>Carthage</MenuItem>
              <MenuItem value={"Hannon"}>Hannon</MenuItem>
              <MenuItem value={"Hannibal"}>Annibal</MenuItem>
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
          onClick={handleClick}
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
