import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Box } from "@mui/material";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = [
    { name: "Carthage", count: 10 },
    { name: "Cantine", count: 5 },
    { name: "Hannibal", count: 8 },
    { name: "Hannon", count: 3 },
  ];

  const labels = data.map((room) => room.name);
  const counts = data.map((room) => room.count);

  const chartData = {
    labels: labels,
    datasets: [
      {
        data: counts,
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#00FF7F"],
        hoverBackgroundColor: ["#d6516d", "#2a83bf", "#e0b54a", "#00e070"],
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
        text: "Meeting Rooms Usage",
        font: {
          size: 20,
        },
      },
    },
  };

  return (
    <Box
      sx={{
        width: 300,
        height: 350,
        backgroundColor: "white",
        borderRadius: "10px",
        // boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        margin: "20px",
      }}
    >
      <Pie options={options} data={chartData} />
    </Box>
  );
};

export default PieChart;
