"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { useTheme } from "@/context/themeContext";

export const ViewVsSpendChart = ({ data }) => {
  const { darkMode } = useTheme();

   const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(0) + "M";
    } else if (num >= 1000) {
      // Ensure the output is always a string with a capital "K"
      return (num / 1000).toFixed(0) + "K";
    }
    // No formatting needed for numbers less than 1000
    return num.toString();
  };
  

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: darkMode ? "#fff" : "#000", // Change legend text color in dark mode
        },
      },
    },
    scales: {
      x: {
        type: 'category', // Use category type to display actual spend values as labels
        ticks: {
          color: darkMode ? "#fff" : "#000",
          callback: function (value, index, values) {
            return formatNumber(data.labels[index]);
          }, // Change x-axis text color in dark mode and format numbers
        },
        title: {
          display: true,
          text: "In Days",
          color: darkMode ? "#fff" : "#000", // Change x-axis title color in dark mode
        },
      },
      y: {
        // display:false,
        ticks: {
          color: darkMode ? "#fff" : "#000",
          callback: function (value) {
            return formatNumber(value);
          }, // Change y-axis text color in dark mode and format numbers
        },
        title: {
          display: true,
          text: "Views per Dollar Spent",
          color: darkMode ? "#fff" : "#000", // Change y-axis title color in dark mode
        },
      },
    },
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-4">
      <Line data={data} options={options} />
    </div>
  );
};

export default ViewVsSpendChart;
