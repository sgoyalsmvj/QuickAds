// components/SpiderChart.js
import React from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const SpiderChart = () => {
  const data = {
    labels: [
      "Concept",
      "Hook",
      "Novelty",
      "Audience Appeal",
      "Visuals",
      "Emotional Impact",
      "Product Focus",
      "Scientific Credibility",
      "Interactive Elements",
      "Call to Action",
    ],
    datasets: [
      {
        label: "Traya Health",
        data: [8, 8, 6, 8, 7, 9, 5, 4, 7, 9],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "SkinKraft",
        data: [7, 7, 7, 8, 8, 8, 7, 6, 7, 9],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "Vedix",
        data: [8, 7, 6, 8, 7, 9, 6, 5, 7, 8],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };
  const options = {
    scales: {
      r: {
        angleLines: {
          display: false,
        },
        suggestedMin: 0,
        suggestedMax: 1,
      },
    },
  };

  return (
    <div className="w-1/2">
      <Radar data={data} options={options} />
    </div>
  );
};

export default SpiderChart;
