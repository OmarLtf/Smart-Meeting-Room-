/*

- Room Name 
- Id
- Capacity
- Devices Number 
- Status

*/

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Drawer from "@mui/material/Drawer";
import RoomInformation from "./RoomInformationView";

const rows = [
  {
    name: "Carthage",
    id: 1,
    capacity: 20,
    devices: 3,
    status: "available",
  },
  {
    name: "Cantine",
    id: 2,
    capacity: 15,
    devices: 2,
    status: "booked",
  },
  {
    name: "Hannibal",
    id: 3,
    capacity: 10,
    devices: 1,
    status: "occupied",
  },
  {
    name: "Hannon",
    id: 4,
    capacity: 25,
    devices: 4,
    status: "available",
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
            {rows.map((row) => (
              <TableRow
                hover
                key={row.title}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  onClick={toggleDrawer(true)}
                  component="th"
                  scope="row"
                  sx={{
                    color: "#1976D2",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.id}</TableCell>
                <TableCell align="right">{row.capacity}</TableCell>
                <TableCell align="right">{row.devices}</TableCell>
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
        onClose={toggleDrawer(false)}
      >
        <RoomInformation hideDrawer={hideDrawerFromChild}></RoomInformation>
      </Drawer>
    </>
  );
}
