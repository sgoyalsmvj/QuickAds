import React from "react";
import { Bar, Line } from "react-chartjs-2";

const GraphsIndex = ({ data }) => {
  const brands = ["Traya", "Vedix", "SkinKraft"];
  const weeks = ["Week 1", "Week 2", "Week 3", "Week 4"];

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const options1 = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#000", // Adjust as per your theme or conditions
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Time Period",
          color: "#000", // Adjust as per your theme or conditions
        },
      },
      y: {
        title: {
          display: true,
          text: "In Dollars",
          color: "#000", // Adjust as per your theme or conditions
        },
        ticks: {
          callback: function (value) {
            return formatNumber(value);
          },
        },
      },
    },
  };
  const options2 = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#000", // Adjust as per your theme or conditions
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Time Period",
          color: "#000", // Adjust as per your theme or conditions
        },
      },
      y: {
        title: {
          display: true,
          text: "Views Per Dollar Spent",
          color: "#000", // Adjust as per your theme or conditions
        },
        ticks: {
          callback: function (value) {
            return formatNumber(value);
          },
        },
      },
    },
  };
  const options3 = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#000", // Adjust as per your theme or conditions
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Brand",
          color: "#000", // Adjust as per your theme or conditions
        },
      },
      y: {
        title: {
          display: true,
          text: "In Dollars",
          color: "#000", // Adjust as per your theme or conditions
        },
        ticks: {
          callback: function (value) {
            return formatNumber(value);
          },
        },
      },
    },
  };

  const getTotalAdBudget = () => {
    return {
      labels: brands,
      datasets: [
        {
          label: "Total Ad Budget",
          data: [
            data.traya.spend.today,
            data.vedix.spend.today,
            data.skinkraft.spend.today,
          ],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(75, 192, 192, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(75, 192, 192, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };
  };

  const getWeeklySpendComparison = () => {
    return {
      labels: weeks,
      datasets: brands.map((brand, index) => {
        const key = brand.toLowerCase().replace(" ", "");
        const spendData = [
          data[key].spend.last7Days,
          data[key].spend.last14Days,
          data[key].spend.last21Days,
          data[key].spend.last30Days,
        ];
        return {
          label: brand,
          data: spendData,
          backgroundColor: `rgba(${255 - index * 50}, ${99 + index * 50}, ${
            132 + index * 50
          }, 0.2)`,
          borderColor: `rgba(${255 - index * 50}, ${99 + index * 50}, ${
            132 + index * 50
          }, 1)`,
          borderWidth: 1,
        };
      }),
    };
  };

  const getEffectiveness = () => {
    return {
      labels: weeks,
      datasets: brands.map((brand, index) => {
        const key = brand.toLowerCase().replace(" ", "");
        const views = [
          data[key].views.last7Days,
          data[key].views.last14Days,
          data[key].views.last21Days,
          data[key].views.last30Days,
        ];
        const spend = [
          data[key].spend.last7Days,
          data[key].spend.last14Days,
          data[key].spend.last21Days,
          data[key].spend.last30Days,
        ];
        const effectiveness = views.map((view, idx) => view / spend[idx]);
        return {
          label: brand,
          data: effectiveness,
          backgroundColor: `rgba(${75 + index * 50}, ${192 - index * 50}, ${
            192 + index * 50
          }, 0.2)`,
          borderColor: `rgba(${75 + index * 50}, ${192 - index * 50}, ${
            192 + index * 50
          }, 1)`,
          borderWidth: 1,
        };
      }),
    };
  };

  const getAvgSpendPerCreative = () => {
    return {
      labels: brands,
      datasets: [
        {
          label: "Average Spend per Creative",
          data: [
            data.traya.spend.today / data.traya.creativeCount,
            data.vedix.spend.today / data.vedix.creativeCount,
            data.skinkraft.spend.today / data.skinkraft.creativeCount,
          ],
          backgroundColor: [
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 206, 86, 0.2)",
          ],
          borderColor: [
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(255, 206, 86, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };
  };

  return (
    <div className="flex justify-around items-center w-full mt-10">
      <div className="w-1/2 ">
        <h2 className="m-3">Weekly Spend Comparison</h2>
        <Line data={getWeeklySpendComparison()} options={options1} />
      </div>
      <div className="w-1/2">
        <h2 className="m-3">Effectiveness (Views/Dollar)</h2>
        <Line data={getEffectiveness()} options={options2} />
      </div>
      <div className="w-1/2">
        <h2 className="m-3">Average Spend per Creative</h2>
        <Bar data={getAvgSpendPerCreative()} options={options3} />
      </div>
    </div>
  );
};

export default GraphsIndex;
