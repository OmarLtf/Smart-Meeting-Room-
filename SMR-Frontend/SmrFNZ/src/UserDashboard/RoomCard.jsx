import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
// websockets

/*
Red Color : from #fcbc94  to #fc8395
blue Color : from  #88cbef to #3899e7
green Color : from  #74cfdb to #1cd1b2
fontColor : #f1ecf3


 */

export default function BasicCard({ props }) {
  const linearGradient =
    props.status === "AVAILABLE"
      ? "linear-gradient(90deg, rgba(159,222,218,1) 0%, rgba(101,214,201,1) 24%, rgba(47,209,186,1) 45%, rgba(13,206,176,1) 77%);"
      : props.status === "OCCUPIED"
      ? "linear-gradient(90deg, rgba(255,189,150,1) 2%, rgba(254,153,141,1) 40%, rgba(254,127,134,1) 88%)"
      : "linear-gradient(90deg, rgba(143,201,249,1) 0%, rgba(96,176,240,1) 25%, rgba(96,176,240,1) 40%, rgba(10,129,224,1) 85%)";

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        minWidth: 340,
        maxWidth: 400,
        maxHeight: 200,
        background: linearGradient,
        margin: "10px",
        position: "relative", // Add relative positioning
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 18, color: "#f1ecf3" }} gutterBottom>
          Room
        </Typography>
        <Typography variant="h4" component="div" sx={{ color: "#f1ecf3" }}>
          {props.room}
        </Typography>
        <Typography sx={{ mb: 1.5, color: "#f1ecf3" }} gutterBottom>
          <br />
          <b>{props.status}</b>
        </Typography>
        <Typography variant="body2" sx={{ color: "#f1ecf3" }}>
          Next Meeting: {props.nextMeetingTime}
        </Typography>
      </CardContent>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: 200,
            height: 200,
            background: "#ffffff",
            borderRadius: "50%",
            marginLeft: 25,
            marginTop: 25,
            position: "absolute",
            opacity: 0.3,
          }}
        ></Box>
        <Box
          sx={{
            width: 200,
            height: 200,
            background: "#ffffff",
            borderRadius: "50%",
            position: "absolute",
            opacity: 0.3,
            transform: "translate(40px, -40px)",
            marginLeft: 30,
          }}
        ></Box>
      </Box>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "right",
          position: "absolute",
          top: 0,
          right: 0,
        }}
      >
        <Button
          sx={{
            color: "#f1ecf3",
            "&:hover": {
              backgroundColor: "rgba(241,236,243, 0.1)",
            },
          }}
          size="small"
        >
          Book
        </Button>
      </CardActions>
    </Card>
  );
}
