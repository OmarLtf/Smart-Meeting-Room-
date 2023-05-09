import {
  Avatar,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Stack,
  Typography,
} from "@mui/material";
import { Delete as DeleteIcon, Edit as EditIcon } from "@mui/icons-material";
import randomColor from "randomcolor";

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    team: "Team A",
    password: "password1",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    team: "Team B",
    password: "password2",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    team: "Team C",
    password: "password3",
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily.davis@example.com",
    team: "Team A",
    password: "password4",
  },
  {
    id: 5,
    name: "Tom Wilson",
    email: "tom.wilson@example.com",
    team: "Team B",
    password: "password5",
  },
  {
    id: 6,
    name: "Sara Lee",
    email: "sara.lee@example.com",
    team: "Team C",
    password: "password6",
  },
  {
    id: 7,
    name: "Mike Johnson",
    email: "mike.johnson@example.com",
    team: "Team A",
    password: "password7",
  },
  {
    id: 8,
    name: "Hannah Smith",
    email: "hannah.smith@example.com",
    team: "Team B",
    password: "password8",
  },
  {
    id: 9,
    name: "David Brown",
    email: "david.brown@example.com",
    team: "Team C",
    password: "password9",
  },
  {
    id: 10,
    name: "Emma Wilson",
    email: "emma.wilson@example.com",
    team: "Team A",
    password: "password10",
  },
  {
    id: 11,
    name: "Joe Davis",
    email: "joe.davis@example.com",
    team: "Team B",
    password: "password11",
  },
  {
    id: 12,
    name: "Rachel Johnson",
    email: "rachel.johnson@example.com",
    team: "Team C",
    password: "password12",
  },
  {
    id: 13,
    name: "Jack Lee",
    email: "jack.lee@example.com",
    team: "Team A",
    password: "password13",
  },
  {
    id: 14,
    name: "Maggie Smith",
    email: "maggie.smith@example.com",
    team: "Team B",
    password: "password14",
  },
  {
    id: 15,
    name: "Tim Brown",
    email: "tim.brown@example.com",
    team: "Team C",
    password: "password15",
  },
  {
    id: 16,
    name: "Olivia Wilson",
    email: "olivia.wilson@example.com",
    team: "Team A",
    password: "password16",
  },
  {
    id: 17,
    name: "Dan Davis",
    email: "dan.davis@example.com",
    team: "Team B",
    password: "password17",
  },
];

function UsersTable() {
  return (
    <TableContainer sx={{ maxWidth: 1200, maxHeight: 400 }}>
      <Table sx={{ minWidth: 650, maxWidth: 1200 }} aria-label="simple table">
        <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>User Name</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>User Email</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Team</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Password</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow hover key={user.id}>
              <TableCell>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar sx={{ bgcolor: randomColor() }}>
                    {user.name.charAt(0).toUpperCase()}
                  </Avatar>
                  <Typography>{user.name}</Typography>
                </Stack>
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.team}</TableCell>
              <TableCell>{user.password}</TableCell>
              <TableCell>
                <IconButton
                  sx={{
                    "&:hover": {
                      backgroundColor: "#77ADFF",

                      color: "white",
                    },
                  }}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  sx={{
                    "&:hover": {
                      backgroundColor: "#FF6A65",
                      color: "white",
                    },
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default UsersTable;
