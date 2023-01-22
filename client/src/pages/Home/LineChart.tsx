import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export function LineChart({progress = []}) {
  const [eyeData, setEyeData] = useState([0, 0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    let arr = [];
    console.log(progress)
    for(let i = 0; i <=7; i++) {
      if(progress[i]?.waterQuantity) {
        arr.push(progress[i].waterQuantity)
      }
    }
    setEyeData(arr)
  }, [progress]);

  const data = {
    labels: ["", "", "", "", "", "", ""],
    datasets: [
      {
        label: "Water habits analysis",
        fill: true,
        data: eyeData,
        borderColor: "rgba(0, 153, 246, 0.5)",
        backgroundColor: "rgba(0, 153, 246, 0.2)",
        responsive: true,
      },
    ],
  };

  return (
    <Line
      data={data}
      options={{
        responsive: true,
        maintainAspectRatio: false,
      }}
    />
  );
}
