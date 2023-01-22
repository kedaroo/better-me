import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const [count, setCount] = useState({meditation: 4, music: 2, walking: 3, other: 1})

  useEffect(() => {
    
  }, []);

  const data = {
    labels: ["Meditation", "Music", "Walking", "Other"],
    datasets: [
      {
        label: "# count",
        data: [count.meditation, count.music, count.walking, count.other],
        backgroundColor: ["rgba(245, 158, 11, 0.7)","rgba(220, 38, 38, 0.7)", "rgba(0, 153, 246, 0.7)", "rgba(107,114,128, 0.7)"],
        borderColor: ["rgba(245, 158, 11, 1)","rgba(220, 38, 38, 1)","rgba(0, 153, 246, 1)", "rgba(107,114,128, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={data} />;
};

export default PieChart;
