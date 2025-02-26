import { useEffect } from "react";
import { motion } from "framer-motion";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Random Data",
        data: Array.from({ length: 6 }, () => Math.floor(Math.random() * 100)),
        backgroundColor: "rgba(255, 120, 0, 0.5)",
        borderColor: "rgb(255, 120, 0)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: { legend: { position: "top" }, title: { display: true, text: "User Activity" } },
  };

  useEffect(() => {
    if (!localStorage.getItem("isLoggedIn")) {
      window.location.href = "/login";
    }
  }, []);

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen p-6 bg-beige"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h1 className="text-4xl font-bold text-blue-800 mb-6">Dashboard</h1>
      <div className="w-full max-w-2xl">
        <Bar data={chartData} options={options} />
      </div>
    </motion.div>
  );
};

export default Dashboard;