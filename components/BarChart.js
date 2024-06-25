import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const BarChart = ({ data }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
