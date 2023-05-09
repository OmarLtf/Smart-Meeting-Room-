/*

- Room Name 
- Id
- Capacity
- Devices Number 
- Status

*/

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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
  return (
    <TableContainer component={Paper} sx={{ maxWidth: 1200, maxHeight: 700 }}>
      <Table sx={{ minWidth: 650, maxWidth: 1200 }} aria-label="simple table">
        <TableHead sx={{ backgroundColor: "#EBF8FD" }}>
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
              <TableCell component="th" scope="row" sx={{ color: "#1976D2" }}>
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
  );
}
