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
import { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import Axios from "axios";
export default function FormPropsTextFields() {
  const [roomID, setRoomID] = useState(0);
  const [roomName, setRoomName] = useState("");
  const [capacity, setCapacity] = useState(0);
  const [roomLocation, setRoomLocation] = useState("");
  const [materials, setMaterials] = useState([]);
  const [numDevices, setNumDevices] = useState(1);
  const [selectedColor, setSelectedColor] = useState("#000000");

  const [devices, setDevices] = useState(
    Array.from({ length: numDevices }, () => "")
  );

  const [availableDevices, setAvailableDevices] = useState([]);

  const colors = [
    "#f15bb5",
    "#00bbf9",
    "#02dbbe",
    "#f5db36",
    "#8a4eff",
    "#ff8b00",
    "#be5eff",
    "#ff622c",
    "#82e755",
    "#848484",
    "#a46400",
    "#bc5789",
    "#b8c5d6",
    "#52796f",
    "#dfbbb1",
    "#71f5ee",
    "#208aae",
  ];

  const handleDeviceChange = (event, index) => {
    const newDevices = [...devices];
    newDevices[index] = event.target.value;
    setDevices(newDevices);
  };

  // Handle Change for Meeting Room Select Input
  const handleLocationChange = (event) => {
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

  const [loading, setLoading] = useState(false);

  const handleSave = (event) => {
    event.preventDefault();
    setLoading(true);

    Axios.get("http://localhost:8080/api/rooms/all").then((response) => {
      const existingIDs = response.data.map((item) => item.id);
      let newID = 0;

      // Generate a new random ID until it doesn't exist in the database
      do {
        newID = Math.floor(Math.random() * 1000);
      } while (existingIDs.includes(newID));

      Axios.post("http://localhost:8080/api/rooms/insert", {
        id: newID,
        roomName: roomName,
        roomLocation: roomLocation,
        status: "AVAILABLE",
        capacity: capacity,
        equipments: materials,
        roomDevices: devices,
        roomBooking: [],
        color: selectedColor, // Include the selected color in the room object
      }).then(() => {
        console.log("successful insert");
        setRoomID(roomID + 1);
        setRoomName("");
        setRoomLocation("");
        setCapacity(0);
        setMaterials([]);
        setNumDevices(1);
        setDevices(Array.from({ length: 1 }, () => ""));
        setSelectedColor("#000000"); // Reset the selected color to default
        setTimeout(() => {
          setLoading(false);
        }, 500);
      });
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:8080/api/device/all").then((response) => {
      setAvailableDevices(response.data);
    });
  }, []);

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
          label="Room Name"
          onChange={(e) => {
            setRoomName(e.target.value);
          }}
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
          onChange={(e) => {
            setCapacity(e.target.value);
          }}
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
              onChange={handleLocationChange}
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
              value={materials.join(", ")}
              label="Room Materials"
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
              {availableDevices.map((device, index) => (
                <MenuItem key={index} value={device.id}>
                  {device.deviceName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        ))}
        <div>
          {/* Rest of the code... */}
          <FormControl sx={{ m: 1, minWidth: "40ch" }}>
            <Select
              sx={{
                backgroundColor: "white",
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                boxShadow: "0 0 4px rgba(0, 0, 0, 0.1)",
                borderRadius: "5px",
                maxWidth: "100px",
              }}
              required
              labelId="color-select-label"
              id="color-select"
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
              label="Room Color"
              defaultValue="#f15bb5"
            >
              {colors.map((color) => (
                <MenuItem key={color} value={color}>
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      backgroundColor: color,
                      borderRadius: "50%",
                    }}
                  ></div>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
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
          onClick={handleSave}
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
