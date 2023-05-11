import { Box, Button, Typography } from "@mui/material";

export default function Error() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",

        width: "100%",
        margin: "0px",
      }}
    >
      <Typography variant="h1" style={{ color: "#424242", fontSize: "150px" }}>
        404
      </Typography>
      <Typography
        variant="h5"
        style={{ color: "black", marginBottom: "20px", textAlign: "center" }}
      >
        The page you’re looking for doesn’t exist.
      </Typography>
      <Button sx={{ backgroundColor: "gray" }} variant="contained">
        Back Home
      </Button>
    </Box>
  );
}
