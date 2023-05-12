/*

- Roomid (automatically)
- Room Name 
- Room Capacity 
- Room Location (Select)
- Room Materials (Select)

Connect Device 
- DeviceName ( Select )
- DeviceConnectionString

*/
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";

export default function FormPropsTextFields() {
  const [roomLocation, setRoomLocation] = React.useState("");
  const [materials, setMaterials] = React.useState([]);
  const [numDevices, setNumDevices] = React.useState(1);
  const [devices, setDevices] = React.useState(
    Array.from({ length: numDevices }, () => "")
  );

  const handleDeviceChange = (event, index) => {
    const newDevices = [...devices];
    newDevices[index] = event.target.value;
    setDevices(newDevices);
  };

  // Handle Change for Meeting Room Select Input
  const handleChange = (event) => {
    setRoomLocation(event.target.value);
  };

  const handleMaterials = (event) => {
    const selectedItemValue = event.target.value;
    if (selectedItemValue == "Clear") {
      setMaterials(materials.slice(0, -1));
    } else {
      setMaterials([...materials, selectedItemValue]);
    }
  };

  // Handle Click for Save Button
  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 500);
  }

  return (
    <Box
      component="form"
      sx={{
        // borderRadius: "10px",
        // backgroundColor: "gray",
        // padding: "20px",
        maxWidth: "45ch",
        "& .MuiTextField-root": { m: 1, width: "40ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          sx={{
            backgroundColor: "white",
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            boxShadow: "0 0 4px rgba(0, 0, 0, 0.1)",
            borderRadius: "5px",
          }}
          required
          id="outlined-required"
          label="Room ID"
          defaultValue=""
        />
        <TextField
          sx={{
            backgroundColor: "white",
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            boxShadow: "0 0 4px rgba(0, 0, 0, 0.1)",
            borderRadius: "5px",
          }}
          required
          id="outlined-required"
          label="Room Name"
          defaultValue=""
        />
        <TextField
          sx={{
            backgroundColor: "white",
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            boxShadow: "0 0 4px rgba(0, 0, 0, 0.1)",
            borderRadius: "5px",
          }}
          required
          type="number"
          id="outlined-required"
          label="Capacity"
          defaultValue=""
        />
        <div>
          <FormControl sx={{ m: 1, minWidth: "40ch" }}>
            <InputLabel id="demo-simple-select-helper-label">
              Room Location
            </InputLabel>
            <Select
              sx={{
                backgroundColor: "white",
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                boxShadow: "0 0 4px rgba(0, 0, 0, 0.1)",
                borderRadius: "5px",
              }}
              required
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={roomLocation}
              label="Room Location"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Charguia Office 2nd Floor"}>
                Charguia Office 2nd Floor
              </MenuItem>
              <MenuItem value={"Geneva Office 1st Floor"}>
                Geneva Office 1st Floor
              </MenuItem>
              <MenuItem value={"Singapor Office 2nd Floor"}>
                Singapor Office 2nd Floor
              </MenuItem>
            </Select>
          </FormControl>
        </div>

        <div>
          <TextField
            sx={{
              backgroundColor: "white",
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
              boxShadow: "0 0 4px rgba(0, 0, 0, 0.1)",
              borderRadius: "5px",
            }}
            id="outlined-required"
            label="Available Materials"
            value={materials.join(", ")}
          />
          <FormControl sx={{ m: 1, minWidth: "40ch" }}>
            <InputLabel id="demo-simple-select-helper-label">
              Room Materials
            </InputLabel>
            <Select
              sx={{
                backgroundColor: "white",
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                boxShadow: "0 0 4px rgba(0, 0, 0, 0.1)",
                borderRadius: "5px",
              }}
              required
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={roomLocation}
              label="Room Location"
              onChange={handleMaterials}
            >
              <MenuItem value="Clear">
                <em>Clear</em>
              </MenuItem>
              <MenuItem value={"LapTops"}>LapTops</MenuItem>
              <MenuItem value={"TVScreen"}>TV Screen</MenuItem>
              <MenuItem value={"DataShow"}>Data Show</MenuItem>
              <MenuItem value={"Noise Filter"}>Noise Filter</MenuItem>
              <MenuItem value={"Camera"}>Camera</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div>
        <TextField
          sx={{
            backgroundColor: "white",
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            boxShadow: "0 0 4px rgba(0, 0, 0, 0.1)",
            borderRadius: "5px",
          }}
          required
          type="number"
          id="outlined-required"
          label="Number of Devices"
          value={numDevices}
          onChange={(e) => setNumDevices(e.target.value)}
        />
        {Array.from({ length: numDevices }, (_, index) => (
          <FormControl key={index} sx={{ m: 1, minWidth: "40ch" }}>
            <InputLabel id={`device${index}-label`}>
              Device {index + 1}
            </InputLabel>
            <Select
              sx={{
                backgroundColor: "white",
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                boxShadow: "0 0 4px rgba(0, 0, 0, 0.1)",
                borderRadius: "5px",
              }}
              required
              labelId={`device${index}-label`}
              id={`device${index}`}
              value={devices[index]}
              label={`Device ${index + 1}`}
              onChange={(e) => handleDeviceChange(e, index)}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"device1"}>device1</MenuItem>
              <MenuItem value={"device2"}>device2</MenuItem>
              <MenuItem value={"device3"}>device3</MenuItem>
            </Select>
          </FormControl>
        ))}
      </div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          mt: 2,
          marginRight: "4ch",
        }}
      >
        <LoadingButton
          color="secondary"
          onClick={handleClick}
          loading={loading}
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="contained"
        >
          <span>Add Room</span>
        </LoadingButton>
      </Box>
    </Box>
  );
}
