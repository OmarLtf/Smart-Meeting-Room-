import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import GroupsIcon from "@mui/icons-material/Groups";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import Typography from "@mui/material/Typography";
import RoomInformation from "../../AdminRooms/RoomInformationView.jsx";

const drawerWidth = 270;

function Dashboard() {
  return <h1>Dashboard</h1>;
}

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const GradientAppBar = styled(AppBar)({
  "&:before": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "5px",
    background:
      "linear-gradient(90deg, rgba(255,175,232,1) 0%, rgba(240,62,188,1) 15%, rgba(246,81,75,1) 61%, rgba(252,201,22,1) 80%, rgba(255,222,107,1) 99%)",
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  background:
    "linear-gradient(45deg, rgba(255,175,232,1) 0%, rgba(240,62,188,1) 0%, rgba(246,81,75,1) 61%, rgba(252,201,22,1) 95%, rgba(255,222,107,1) 99%)",
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar

  justifyContent: "space-between",
  height: "43px",
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <GradientAppBar
        sx={{
          backgroundColor: "black",
        }}
        position="fixed"
        open={open}
      >
        <Toolbar variant="dense">
          <IconButton
            size="small"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              mr: 0,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </GradientAppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Typography
            sx={{ fontWeight: "bold", color: "#FEFDFC" }}
            variant="h5"
            component="h1"
          >
            FNZ 2meet
          </Typography>

          <IconButton
            sx={{
              padding: "5px",
              "&:hover": {
                backgroundColor: "black",
                color: "white",
                padding: "5px",
              },
            }}
            onClick={handleDrawerClose}
          >
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider sx={{ borderTop: "5px solid black" }} />

        <List>
          {[
            "Dashboard",
            "My Meetings",
            "Admin Dashboard",
            "Rooms Management",
          ].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {text === "Dashboard" ? (
                    <SpaceDashboardIcon />
                  ) : text === "My Meetings" ? (
                    <GroupsIcon />
                  ) : text === "Admin Dashboard" ? (
                    <AdminPanelSettingsIcon />
                  ) : (
                    <MeetingRoomIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["Profile", "Log out"].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {text == "Profile" ? <AccountCircleIcon /> : <LogoutIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <BrowserRouter>
          <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="test" element={<RoomInformation />} />
          </Routes>
        </BrowserRouter>
      </Main>
    </Box>
  );
}
