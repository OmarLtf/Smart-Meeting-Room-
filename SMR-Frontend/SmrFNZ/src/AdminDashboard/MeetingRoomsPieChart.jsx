import Typography from "@mui/material/Typography";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import Box from "@mui/material/Box";

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

  return (
    <Box
      sx={{
        width: 300,
        backgroundColor: "#FBFBFB",
        borderRadius: "10px",
        boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <Pie data={chartData} />
      <Typography
        gutterBottom
        variant="h5"
        sx={{
          textAlign: "center",
          color: "#333333",
          marginTop: "10px",
        }}
      >
        Meeting Room Usage per Week
      </Typography>
    </Box>
  );
};

export default PieChart;
