/*
- Meeting Title 
- Day 
- StartTime 
- EndTime
- Room
- Invite People (send e-mail)
- Commments ( If invites people )
*/

import * as React from "react";
import { Box } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export default function FormPropsTextFields({ hideDrawer }) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // Handle Click for Save Button
  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 500);
  }

  const hide = () => {
    hideDrawer(false);
  };

  return (
    <Box
      component="form"
      sx={{
        // borderRadius: "10px",
        // backgroundColor: "gray",
        // padding: "20px",
        maxWidth: "45ch",
        "& .MuiTextField-root": { m: 1, width: "45ch" },
      }}
      noValidate
      autoComplete="off"
      margin={5}
    >
      <div>
        <Typography
          sx={{ color: "	#707070", margin: "5px" }}
          variant="h6"
          component="h2"
        >
          Change e-mail
        </Typography>
        <TextField
          sx={{
            m: 1,
            backgroundColor: "white",
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            boxShadow: "0 0 4px rgba(0, 0, 0, 0.1)",
            borderRadius: "5px",
            width: "45ch",
          }}
          id="outlined-search"
          label="New e-mail"
        />
        <Divider light />
        <Typography
          sx={{ color: "	#707070", margin: "5px" }}
          variant="h6"
          component="h2"
        >
          Change password
        </Typography>
        <FormControl
          sx={{
            m: 1,
            backgroundColor: "white",
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            boxShadow: "0 0 4px rgba(0, 0, 0, 0.1)",
            borderRadius: "5px",
            width: "45ch",
          }}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-newpassword">
            New password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-confirm-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <FormControl
          sx={{
            m: 1,
            backgroundColor: "white",
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            boxShadow: "0 0 4px rgba(0, 0, 0, 0.1)",
            borderRadius: "5px",
            width: "45ch",
          }}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Confirm password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      </div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          mt: 2,
          marginRight: "4ch",
        }}
      >
        <LoadingButton
          onClick={hide}
          startIcon={<ArrowBackIosNewIcon />}
          variant="contained"
        >
          <span>CANCEL</span>
        </LoadingButton>
        <LoadingButton
          color="secondary"
          onClick={handleClick}
          loading={loading}
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="contained"
        >
          <span>Update</span>
        </LoadingButton>
      </Box>
    </Box>
  );
}
