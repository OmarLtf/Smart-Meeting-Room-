import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Box from "@mui/material/Box";
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
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Team A",
        data: [7, 5, 3, 2],
        backgroundColor: "#FF6384",
        borderWidth: 1,
      },
      {
        label: "Team B",
        data: [2, 4, 6, 8],
        backgroundColor: "#36A2EB",
        borderWidth: 1,
      },
      {
        label: "Team C",
        data: [5, 4, 3, 2],
        backgroundColor: "#FFCE56",
        borderWidth: 1,
      },
      {
        label: "Team D",
        data: [3, 2, 5, 4],
        backgroundColor: "#FF8C00",
        borderWidth: 1,
      },
      {
        label: "Team E",
        data: [6, 1, 2, 3],
        backgroundColor: "#800080",
        borderWidth: 1,
      },
      {
        label: "Team F",
        data: [4, 3, 1, 6],
        backgroundColor: "#008080",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: "x",
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
        margin: "10px",
        height: "370px",
        width: "700px",
        backgroundColor: "#FBFBFB",
        borderRadius: "10px",
        boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
        padding: "20px",
      }}
    >
      <Bar data={data} options={options} />
    </Box>
  );
};

export default BarChart;
