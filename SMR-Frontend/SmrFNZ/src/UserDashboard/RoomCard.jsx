import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function BasicCard() {
  return (
    <Card
      sx={{
        minWidth: 340,
        maxWidth: 400,
        backgroundColor: "background.paper",
        margin: "10px",
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
          Room
        </Typography>
        <Typography variant="h4" component="div">
          Carthage
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <br />
          AVAILABE
        </Typography>
        <Typography variant="body2">Next Meeting : 14:30</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Book</Button>
      </CardActions>
    </Card>
  );
}
