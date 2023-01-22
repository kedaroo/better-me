import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { getBreakActivityCount } from "./utils";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ progress }) => {
  const [count, setCount] = useState({
    meditation: 0,
    music: 0,
    walking: 0,
    other: 0,
  });

  useEffect(() => {
    const breakCount = getBreakActivityCount(progress);
    setCount(breakCount);
  }, [progress]);

  const data = {
    labels: ["Meditation", "Music", "Walking", "Other"],
    datasets: [
      {
        label: "# count",
        data: [count.meditation, count.music, count.walking, count.other],
        backgroundColor: [
          "rgba(245, 158, 11, 0.7)",
          "rgba(220, 38, 38, 0.7)",
          "rgba(0, 153, 246, 0.7)",
          "rgba(107,114,128, 0.7)",
        ],
        borderColor: [
          "rgba(245, 158, 11, 1)",
          "rgba(220, 38, 38, 1)",
          "rgba(0, 153, 246, 1)",
          "rgba(107,114,128, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Pie
      data={data}
      options={{
        plugins: {
          title: { display: true, text: "Your breaktime activities" },
        },
      }}
    />
  );
};

export default PieChart;
