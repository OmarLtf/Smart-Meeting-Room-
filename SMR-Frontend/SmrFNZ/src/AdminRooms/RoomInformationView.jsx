import { Box } from "@mui/material";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import LoadingButton from "@mui/lab/LoadingButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function MiddleDividers({ hideDrawer }) {
  const rows = [
    {
      deviceName: "device1",
      id: "LT001",
      status: "Connected",
    },
    {
      deviceName: "device2",
      id: "PR001",
      status: "Battery-Low",
    },
  ];

  const hide = () => {
    hideDrawer(false);
  };
  return (
    <Box sx={{ width: 450, maxWidth: 500, bgcolor: "white", padding: 3 }}>
      <Box sx={{ my: 3, mx: 2 }}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              sx={{ marginTop: "15px" }}
            >
              Carthage
            </Typography>
          </Grid>
          <Grid>
            <LoadingButton
              sx={{
                backgroundColor: "#59BAB1",
                "&:hover": {
                  backgroundColor: "#59BAB1",

                  boxShadow: "none",
                },

                boxShadow: "none",
              }}
              size="small"
              color="secondary"
              variant="contained"
            >
              <span>
                <b>Available</b>
              </span>
            </LoadingButton>
          </Grid>
        </Grid>
        <Typography color="text.secondary" variant="body2">
          Charguia Office 2nd Floor
        </Typography>
      </Box>
      <Divider variant="middle" />
      <TableContainer
        sx={{ marginTop: "20px", boxShadow: "none" }}
        component={Paper}
      >
        <Table sx={{ minWidth: 100 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: "#0e5b9e" }}>Device</TableCell>
              <TableCell sx={{ color: "#0e5b9e" }} align="right">
                ID
              </TableCell>
              <TableCell sx={{ color: "#0e5b9e" }} align="right">
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.deviceName}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.deviceName}
                </TableCell>
                <TableCell align="right">{row.id}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ m: 2 }}>
        <Typography gutterBottom variant="h6">
          Materials
        </Typography>
        <Stack sx={{ maxWidth: 100 }} direction="row" spacing={2}>
          <Chip color="primary" label="Laptops" />
          <Chip color="primary" label="Data Show" />
          <Chip label="Camera" />
          <Chip color="primary" label="Noise Filter" />
          <Chip label="TV Screen" />
        </Stack>
      </Box>
      <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
        <Button onClick={hide}>Back</Button>
      </Box>
    </Box>
  );
}
