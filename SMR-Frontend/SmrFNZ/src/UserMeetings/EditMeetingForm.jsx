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
import Box from "@mui/material/Box";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

export default function FormPropsTextFields() {
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
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker required label="Basic date picker" />
          </DemoContainer>
        </LocalizationProvider>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["TimePicker"]}>
            <TimePicker required label="Start Time" />
          </DemoContainer>
        </LocalizationProvider>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["TimePicker"]}>
            <TimePicker required label="End Time" />
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
        <LoadingButton startIcon={<ArrowBackIosNewIcon />} variant="contained">
          <span>CANCEL</span>
        </LoadingButton>
        <LoadingButton
          color="secondary"
          onClick={handleClick}
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
