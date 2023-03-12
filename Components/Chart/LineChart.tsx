// components/LineChart.js
import React from "react";
import { Line } from "react-chartjs-2";

type ChartData = {
  chartData: any;
};

function LineChart(data: ChartData) {
  return (
    <div className="">
      <Line
        data={data.chartData}
        color="white"
        height='500px'
        width='600px'
        options={{
          plugins: {
            title: {
              display: true,
              text: "Carbon Goals to Hit Net Zero",
              color: "white",
            },
          },
        }}
      />
    </div>
  );
}
export default LineChart;
