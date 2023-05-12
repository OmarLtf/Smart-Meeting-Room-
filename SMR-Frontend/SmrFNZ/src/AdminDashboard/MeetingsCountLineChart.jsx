import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Box } from "@mui/material";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Team A",
      data: [12, 19, 3, 5, 2, 3, 12, 15, 9, 21, 6, 10],
      backgroundColor: "#FF6384",
      borderColor: "#FF6384",
      borderWidth: 1,
      hoverBorderWidth: 5,
      fill: false,
    },
    {
      label: "Team B",
      data: [5, 7, 9, 12, 15, 17, 13, 10, 7, 5, 4, 2],
      backgroundColor: "#36A2EB",
      borderColor: "#36A2EB",
      borderWidth: 1,
      hoverBorderWidth: 5,
      fill: false,
    },
    {
      label: "Team C",
      data: [3, 4, 5, 6, 8, 11, 14, 16, 12, 9, 7, 4],
      backgroundColor: "#FFCE56",
      borderColor: "#FFCE56",
      borderWidth: 1,
      hoverBorderWidth: 5,
      fill: false,
    },
    {
      label: "Team D",
      data: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
      backgroundColor: "#4BC0C0",
      borderColor: "#4BC0C0",
      borderWidth: 1,
      hoverBorderWidth: 5,
      fill: false,
    },
    {
      label: "Team E",
      data: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0],
      backgroundColor: "#FF9F40",
      borderColor: "#FF9F40",
      borderWidth: 1,
      hoverBorderWidth: 5,
      fill: false,
    },
    {
      label: "Team F",
      data: [6, 12, 18, 24, 20, 16, 12, 8, 4, 2, 0, 0],
      backgroundColor: "#9966FF",
      borderColor: "#9966FF",
      borderWidth: 1,
      hoverBorderWidth: 5,
      fill: false,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "Teams Meetings Count",
      font: {
        size: 20,
      },
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Month",
      },
    },
    y: {
      title: {
        display: true,
        text: "Number of Meetings",
      },
    },
  },
};

const LineChart = () => {
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
      <Line data={data} options={options} />
    </Box>
  );
};

export default LineChart;
