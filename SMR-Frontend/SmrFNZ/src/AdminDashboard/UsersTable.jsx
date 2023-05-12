import * as React from "react";
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
import Drawer from "@mui/material/Drawer";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Draggable from "react-draggable";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import EditUser from "./EditUser.jsx";

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

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

function UsersTable() {
  const [state, setState] = React.useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const hideDrawerFromChild = (value) => {
    setState(value);
  };

  return (
    <>
      <TableContainer
        sx={{
          margin: "20px",
          maxHeight: 400,
          maxWidth: 1500,
          backgroundColor: "white",
          "&::-webkit-scrollbar": {
            width: "6px",
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#c4c4c4",
            borderRadius: "10px",
            "&:hover": {
              backgroundColor: "#a9a9a9",
            },
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#f5f5f5",
          },
          "&::-webkit-scrollbar-button": {
            display: "none",
          },
        }}
      >
        <Table
          sx={{
            minWidth: 650,
            borderRadius: "10px",
            overflow: "hidden",
            borderCollapse: "separate",
            borderSpacing: "0px",
          }}
          aria-label="simple table"
        >
          <TableHead
            variant="head"
            sx={{
              position: "sticky",
              top: "0",
              backgroundColor: "white",
              opacity: "1",
              zIndex: "1", // Add this line
            }}
          >
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
                    onClick={toggleDrawer(true)}
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
                    onClick={handleClickOpen}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Drawer
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "#F6F6F6",
          },
        }}
        anchor="right"
        open={state}
        onClose={toggleDrawer(false)}
      >
        <EditUser hideDrawer={hideDrawerFromChild}></EditUser>
      </Drawer>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          PaperComponent={PaperComponent}
          aria-labelledby="draggable-dialog-title"
        >
          <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
            Delete User
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to delete this user?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Discard
            </Button>
            <Button onClick={handleClose}>Delete</Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
}

export default UsersTable;
