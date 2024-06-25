// data/chartData.js
export const lineChartData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Ad Spend",
      data: [
        12000, 19000, 30000, 5000, 2000, 30000, 45000, 32000, 40000, 60000,
        70000, 80000,
      ],
      fill: false,
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "rgba(75,192,192,1)",
    },
  ],
};

export const barChartData = {
  labels: ["Q1", "Q2", "Q3", "Q4"],
  datasets: [
    {
      label: "Testing Volume",
      data: [12000, 19000, 30000, 5000],
      backgroundColor: "rgba(153, 102, 255, 0.2)",
      borderColor: "rgba(153, 102, 255, 1)",
      borderWidth: 1,
    },
  ],
};
