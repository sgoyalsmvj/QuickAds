"use client";
import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import { useTheme } from "@/context/themeContext";
import { formatNumber } from "./LineChart";

const BarChart = ({ data }) => {
  const { darkMode } = useTheme();
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: `${darkMode ? "#fff" : "#000"}`, // Change legend text color in dark mode
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: `${darkMode ? "#fff" : "#000"}`, // Change x-axis text color in dark mode
        },
        title: {
          display: true,
          text: "In Days",
          color: `${darkMode ? "#fff" : "#000"}`, // Change x-axis title color in dark mode
        },
      },
      y: {
        ticks: {
          color: `${darkMode ? "#fff" : "#000"}`,
          callback: function (value) {
            return formatNumber(value);
          }, // Change y-axis text color in dark mode
        },
        title: {
          display: true,
          text: "Views",
          color: `${darkMode ? "#fff" : "#000"}`, // Change x-axis title color in dark mode
        },
      },
    },
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-4">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
