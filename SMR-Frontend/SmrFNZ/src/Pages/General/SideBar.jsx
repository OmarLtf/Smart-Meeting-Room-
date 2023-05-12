import * as React from "react";
import { Link, useRoutes } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";
import Drawer from "@mui/material/Drawer";
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
import NotFound404 from "./404NotFound.jsx";
import Dashboard from "../UserInterfaces/Dashboard.jsx";
import MyMeetings from "../UserInterfaces/UserMeetings.jsx";
import AdminDashboard from "../UserInterfaces/AdminDashboard.jsx";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import AdminRooms from "../UserInterfaces/AdminRooms.jsx";

//max = 1530
const drawerWidth = 270;

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
      marginTop: 30,
      maxWidth: "82%",
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
      "linear-gradient(90deg, rgba(255,170,232,1) 0%, rgba(240,62,188,1) 5%, rgba(246,81,75,1) 61%, rgba(252,201,22,1) 80%, rgba(255,222,107,1) 99%)",
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  backgroundColor: "black",
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

  const routes = useRoutes([
    { path: "/", element: <Dashboard></Dashboard> },
    { path: "/dashboard", element: <Dashboard /> },
    {
      path: "/meetings",
      element: <MyMeetings></MyMeetings>,
    },
    { path: "/admin_dashboard", element: <AdminDashboard></AdminDashboard> },
    { path: "/rooms", element: <AdminRooms></AdminRooms> },

    { path: "/404", element: <NotFound404 /> },
  ]);

  return (
    <Box sx={{ height: "100%", backgroundColor: "#F6F6F6", display: "flex" }}>
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
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              sx={{ fontWeight: "bold", color: "#FEFDFC" }}
              variant="h5"
              component="h1"
            >
              FNZ
            </Typography>
            <LooksTwoIcon
              sx={{
                color: "white",
                fontSize: "2rem",
                backgroundSize: "50%",
                background:
                  "linear-gradient(45deg, rgba(255,170,232,1) 0%, rgba(240,62,188,1) 5%, rgba(246,81,75,1) 40%, rgba(252,201,22,1) 80%, rgba(255,222,107,1) 99%)",
                borderRadius: "0.25rem",
                margin: "3px",
              }}
            ></LooksTwoIcon>
            <Typography
              sx={{ fontWeight: "bold", color: "#FEFDFC" }}
              variant="h5"
              component="h1"
            >
              Meet
            </Typography>
          </Box>

          <IconButton
            sx={{
              padding: "5px",
              color: "white",
              "&:hover": {
                backgroundColor: "white",
                color: "black",
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
        <Divider
          sx={{
            backgroundImage:
              "linear-gradient(90deg, rgba(255,222,107,1) 0%, rgba(252,201,22,1) 15%, rgba(246,81,75,1) 61%, rgba(240,62,188,1) 90%, rgba(255,170,232,1) 100%)",
            height: 5,
          }}
        />

        <List>
          {[
            "Dashboard",
            "My Meetings",
            "Admin Dashboard",
            "Rooms Management",
          ].map((text) => (
            <Link
              style={{ textDecoration: "none", color: "#2B2B2B" }}
              key={text}
              to={
                text === "Dashboard"
                  ? "/dashboard"
                  : text === "My Meetings"
                  ? "/meetings"
                  : text === "Admin Dashboard"
                  ? "/admin_dashboard"
                  : text === "Rooms Management"
                  ? "/rooms"
                  : "/404"
              }
            >
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
            </Link>
          ))}
        </List>
        <Divider />
        <List>
          {["Log out"].map((text) => (
            <Link
              style={{ textDecoration: "none", color: "#2B2B2B" }}
              key={text}
              to={text === "Log out" ? "/signin" : "/404"}
            >
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {text == "Profile" ? <AccountCircleIcon /> : <LogoutIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
      <Main
        sx={{
          backgroundColor: "#F6F6F6",
          marginTop: "30px",
          // maxWidth: open === true ? "82%" : "100%",
          maxWidth: open === true ? "83%" : "100%",
          height: "100%",
        }}
        open={open}
      >
        {routes}
      </Main>
    </Box>
  );
}
