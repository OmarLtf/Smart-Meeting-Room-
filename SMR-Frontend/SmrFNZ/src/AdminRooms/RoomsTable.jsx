/*

- Room Name 
- Id
- Capacity
- Devices Number 
- Status

*/

import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Drawer from "@mui/material/Drawer";
import RoomInformation from "./RoomInformationView";
import Axios from "axios";

export default function BasicTable() {
  const [state, setState] = useState(false);
  const [meetingRooms, setMeetingRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState({});

  const getMeetingRooms = () => {
    Axios.get(`http://localhost:8080/api/rooms/all`).then((response) => {
      // const parsedObject = JSON.parse(response.data);
      const roomsArray = Object.values(response.data);
      setMeetingRooms(roomsArray);
    });
  };

  const hideDrawerFromChild = (value) => {
    setState(value);
  };

  const toggleDrawer = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(!state);
  };

  const handleRoomInformation = (row) => {
    setSelectedRoom(row);
    toggleDrawer(false);
  };

  useEffect(() => {
    getMeetingRooms();
    console.log(meetingRooms);
  });
  return (
    <>
      <TableContainer
        component={Paper}
        sx={{ maxWidth: 1500, maxHeight: 700, marginTop: 1 }}
      >
        <Table sx={{ minWidth: 650, maxWidth: 1200 }} aria-label="simple table">
          <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
            <TableRow>
              <TableCell>
                <b>Rooms</b>
              </TableCell>
              <TableCell align="right">
                <b>ID</b>
              </TableCell>
              <TableCell align="right">
                <b>Capacity</b>
              </TableCell>
              <TableCell align="right">
                <b>Devices</b>
              </TableCell>
              <TableCell align="right">
                <b>Status</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {meetingRooms.map((row, index) => (
              <TableRow
                hover
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  onClick={() => {
                    handleRoomInformation(row);
                  }}
                  component="th"
                  scope="row"
                  sx={{
                    color: "#1976D2",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  {row.roomName}
                </TableCell>
                <TableCell align="right">{row.id}</TableCell>
                <TableCell align="right">{row.capacity}</TableCell>
                <TableCell align="right">{row.roomDevices.length}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Drawer
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "white",
          },
        }}
        anchor="right"
        open={state}
        onClose={() => {
          toggleDrawer(false);
        }}
      >
        <RoomInformation
          selectedRoom={selectedRoom}
          hideDrawer={hideDrawerFromChild}
        ></RoomInformation>
      </Drawer>
    </>
  );
}
