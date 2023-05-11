/*
- Meeting Title
- Room
- Date
- Time
- Edit

*/
import * as React from "react";
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

const rows = [
  {
    title: "Team Meeting",
    room: "Carthage",
    date: "2023-05-10",
    startTime: "14:30",
    endTime: "15:30",
  },
  {
    title: "Project Planning",
    room: "Cantine",
    date: "2023-05-11",
    startTime: "10:00",
    endTime: "11:30",
  },
  {
    title: "Design Review",
    room: "Hannibal",
    date: "2023-05-12",
    startTime: "13:00",
    endTime: "14:30",
  },
  {
    title: "Client Presentation",
    room: "Carthage",
    date: "2023-05-13",
    startTime: "11:00",
    endTime: "12:00",
  },
];

export default function BasicTable() {
  const [state, setState] = React.useState(false);

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
            {rows.map((row) => (
              <TableRow
                hover
                key={row.title}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell align="right">
                  <LoadingButton
                    sx={{
                      backgroundColor:
                        row.room === "Carthage"
                          ? "#f15bb5"
                          : row.room === "Hannon"
                          ? "#00bbf9"
                          : row.room === "Hannibal"
                          ? "#02dbbe"
                          : "#f5db36",
                      "&:hover": {
                        backgroundColor:
                          row.room === "Carthage"
                            ? "#f15bb5"
                            : row.room === "Hannon"
                            ? "#00bbf9"
                            : row.room === "Hannibal"
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
                      <b>{row.room}</b>
                    </span>
                  </LoadingButton>
                </TableCell>
                <TableCell align="right">{row.date}</TableCell>
                <TableCell align="right">
                  {row.startTime + " -" + row.endTime}
                </TableCell>
                <TableCell align="right">
                  <Button
                    sx={{ marginRight: "10px" }}
                    size="small"
                    variant="outlined"
                    startIcon={<HighlightOffIcon />}
                  >
                    Cancle
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
      <Drawer anchor="right" open={state} onClose={toggleDrawer(false)}>
        <EditMeetingForm hideDrawer={hideDrawerFromChild}></EditMeetingForm>
      </Drawer>
    </>
  );
}
