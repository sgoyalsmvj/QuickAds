"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { useTheme } from "@/context/themeContext";

export const VideoViews = ({ data }) => {
  const { darkMode } = useTheme();
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: darkMode ? "#fff" : "#000",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: darkMode ? "#fff" : "#000",
        },
        title: {
          display: true,
          text: "Date",
          color: darkMode ? "#fff" : "#000",
        },
      },
      y: {
        ticks: {
          color: darkMode ? "#fff" : "#000",
        },
        title: {
          display: true,
          text: "Views",
          color: darkMode ? "#fff" : "#000",
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
