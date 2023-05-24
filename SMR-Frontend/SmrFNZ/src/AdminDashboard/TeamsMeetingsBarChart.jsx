import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Box } from "@mui/material";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const BarChart = () => {
  const data = {
    labels: ["room1", "room2", "room3", "room4", "room5", "room6", "roomm7"],
    datasets: [
      {
        label: "Team A",
        data: [7, 5, 3, 2, 10, 3, 5],
        backgroundColor: "#FF6384",
        borderWidth: 1,
      },
      {
        label: "Team B",
        data: [2, 4, 6, 8, 8, 12, 1],
        backgroundColor: "#36A2EB",
        borderWidth: 1,
      },
      {
        label: "Team C",
        data: [5, 4, 3, 2, 7, 2, 8],
        backgroundColor: "#FFCE56",
        borderWidth: 1,
      },
      {
        label: "Team D",
        data: [3, 2, 5, 4, 10, 3, 3],
        backgroundColor: "#4BC0C0",
        borderWidth: 1,
      },
      {
        label: "Team E",
        data: [6, 1, 2, 3, 5, 7, 9],
        backgroundColor: "#FF9F40",
        borderWidth: 1,
      },
      {
        label: "Team F",
        data: [4, 3, 1, 6, 9, 9, 5],
        backgroundColor: "#9966FF",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: "x",
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Meeting Rooms Usage Per Team",
        font: {
          size: 20,
        },
      },
    },
  };

  return (
    <Box
      sx={{
        margin: "30px",
        height: "350px",
        width: "630px",
        minHeight: "222px",
        minWidth: "400px",
        // minWidth: "1px",
        backgroundColor: "white",
        borderRadius: "10px",
        // boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
        padding: "20px",
      }}
    >
      <Bar data={data} options={options} />
    </Box>
  );
};

export default BarChart;
