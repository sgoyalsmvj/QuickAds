import React from "react";
import { Line, Bar } from "react-chartjs-2";
import { CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Chart as Ch } from "chart.js";
import Campaigns from "./Campaigns";
import SkinKraftData1 from "@/datafiles/SkinKraft1.json";
import TrayaData1 from "@/datafiles/TrayaHealth1.json";
import VedixData1 from "@/datafiles/Vedix1.json";
import data from "@/datafiles/contentData";

Ch.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const GraphsIndex = ({ data }) => {
  const brands = ["SkinKraft", "Traya", "Vedix"]; // Updated brand order
  const weeks = ["Week 1", "Week 2", "Week 3", "Week 4"];

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const darkColor = "#333"; // Dark color theme for graphs
  const skinkraftColor = "#01afc8";
  const trayaColor = "#000";
  const vedixColor = "#e3d6b4";

  const options1 = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: darkColor,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Time Period",
          color: darkColor,
        },
      },
      y: {
        title: {
          display: true,
          text: "In Dollars",
          color: darkColor,
        },
        ticks: {
          callback: function (value) {
            return formatNumber(value);
          },
          color: darkColor,
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
          color: darkColor,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Time Period",
          color: darkColor,
        },
      },
      y: {
        title: {
          display: true,
          text: "Views Per Dollar Spent",
          color: darkColor,
        },
        ticks: {
          callback: function (value) {
            return formatNumber(value);
          },
          color: darkColor,
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
          color: darkColor,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Brand",
          color: darkColor,
        },
      },
      y: {
        title: {
          display: true,
          text: "In Dollars",
          color: darkColor,
        },
        ticks: {
          callback: function (value) {
            return formatNumber(value);
          },
          color: darkColor,
        },
      },
    },
  };

  const company1Data = SkinKraftData1;
  const company2Data = TrayaData1;
  const company3Data = VedixData1;

  const getWeeklySpendComparison = () => {
    return {
      labels: weeks,
      datasets: brands.map((brand, index) => {
        const key = brand.toLowerCase();
        const spendData = [
          data[key].spend.last7Days,
          data[key].spend.last14Days,
          data[key].spend.last21Days,
          data[key].spend.last30Days,
        ];
        let backgroundColor, borderColor;
        if (brand === "SkinKraft") {
          backgroundColor = `rgba(1, 175, 200, 0.2)`; // #01afc8
          borderColor = `rgba(1, 175, 200, 1)`;
        } else if (brand === "Traya") {
          backgroundColor = `rgba(0, 0, 0, 0.2)`; // #000
          borderColor = `rgba(0, 0, 0, 1)`;
        } else if (brand === "Vedix") {
          backgroundColor = `rgba(255, 0, 0,0.4)`; // #e3d6b4
          borderColor = `rgba(255, 0, 0,1)`;
        }
        return {
          label: brand,
          data: spendData,
          backgroundColor,
          borderColor,
          borderWidth: 1,
        };
      }),
    };
  };

  const getEffectiveness = () => {
    return {
      labels: weeks,
      datasets: brands.map((brand, index) => {
        const key = brand.toLowerCase();
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
        let backgroundColor, borderColor;
        if (brand === "SkinKraft") {
          backgroundColor = `rgba(1, 175, 200, 0.2)`; // #01afc8
          borderColor = `rgba(1, 175, 200, 1)`;
        } else if (brand === "Traya") {
          backgroundColor = `rgba(0, 0, 0, 0.2)`; // #000
          borderColor = `rgba(0, 0, 0, 1)`;
        } else if (brand === "Vedix") {
          backgroundColor = `rgba(255, 0, 0,0.4)`; // #e3d6b4
          borderColor = `rgba(255, 0, 0,1)`;
        }
        return {
          label: brand,
          data: effectiveness,
          backgroundColor,
          borderColor,
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
            company1Data.data.brand.spend.today / company1Data.data.creativeCount,
            company2Data.data.brand.spend.today / company2Data.data.creativeCount,
            company3Data.data.brand.spend.today / company3Data.data.creativeCount,
          ],
          backgroundColor: [
            `rgba(1, 175, 200, 0.2)`, // #01afc8
            `rgba(0, 0, 0, 0.2)`, // #000
            `rgba(255, 0, 0,0.4)` // #e3d6b4
          ],
          borderColor: [
            `rgba(1, 175, 200, 1)`,
            `rgba(0, 0, 0, 1)`,
            `rgba(255, 0, 0,1)`
          ],
          borderWidth: 1,
        },
      ],
    };
  };

  return (
    <div className="w-full overflow-x-auto">
      <div className="flex flex-col md:flex-row justify-around items-center w-full mt-10 font-semibold">
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <h2 className="m-6">Weekly Spend Comparison</h2>
          <Line data={getWeeklySpendComparison()} options={options1} />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <h2 className="m-6">Effectiveness (Views/Dollar)</h2>
          <Line data={getEffectiveness()} options={options2} />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <h2 className="m-6">Average Spend per Creative</h2>
          <Bar data={getAvgSpendPerCreative()} options={options3} />
        </div>
      </div>

      <div className="flex flex-col md:flex-row m-2 md:m-4  justify-around">
        <Campaigns companyData={company1Data} />
        <Campaigns companyData={company2Data} />
        <Campaigns companyData={company3Data} />
      </div>
    </div>
  );
};

export default GraphsIndex;
