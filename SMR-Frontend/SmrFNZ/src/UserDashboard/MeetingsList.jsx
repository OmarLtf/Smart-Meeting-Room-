import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Axios from "axios";

export default function AlignItemsList() {
  const [todaysMeetings, setTodaysMeetings] = React.useState([]);

  const getTodaysMeetings = () => {
    Axios.get("http://localhost:8080/api/booking/today/all").then(
      (response) => {
        setTodaysMeetings(response.data);
      }
    );
  };

  React.useEffect(() => {
    getTodaysMeetings();
    console.log(todaysMeetings);
  }, []);
  return (
    <List
      sx={{
        borderRadius: "5px",
        margin: "20px",
        marginTop: "0px",
        width: "100%",
        maxWidth: 360,
        maxHeight: 500,
        bgcolor: "white",
        overflowY: "auto",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      {todaysMeetings.map((meeting, index) => (
        <React.Fragment key={index}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={meeting.name} src={meeting.avatar} />
            </ListItemAvatar>
            <ListItemText
              primary={meeting.name}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {meeting.title}
                  </Typography>
                  {` — ${new Date(
                    meeting.startTime
                  ).toLocaleTimeString()} to ${new Date(
                    meeting.endTime
                  ).toLocaleTimeString()}`}
                </React.Fragment>
              }
            />
          </ListItem>
          {index !== todaysMeetings.length - 1 && (
            <Divider variant="inset" component="li" />
          )}
        </React.Fragment>
      ))}
    </List>
  );
}
