import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Data } from "./netZeroData";
import LineChart from "./LineChart";

Chart.register(CategoryScale);

export default function NetZeroChart() {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "Giga Ton CO2 ",
        data: Data.map((data) => data.GigatonCO2),
        backgroundColor: [
          "white",
        ],
        borderColor: "white",
        borderWidth: 3,
        responsive: true,
      },
    ],
  });

  return (
    <div>
      <LineChart chartData={chartData} />
    </div>
  );
}
