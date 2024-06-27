import SkinkraftData from "../datafiles/SkinKraft1.json";
import TrayaData from "../datafiles/TrayaHealth1.json";
import VedixData from "../datafiles/Vedix1.json";
// console.log(SkinkraftData);
function getViewsAndSpend(data) {
  const views = [];
  const spend = [];

  const viewsData = data.data.brand.views;
  const spendData = data.data.brand.spend;

  for (const [key, value] of Object.entries(viewsData)) {
    if (key !== "collected_on" && key !== "today") {
      views.push(value);
    }
  }

  for (const [key, value] of Object.entries(spendData)) {
    if (key !== "collected_on" && key !== "today") {
      spend.push(value);
    }
  }
  // console.log(views, spend);
  return { views, spend };
}

const commonLabels = [
  "<7",
  "<14",
  "<21",
  "<30",
  "<60",
  "<90",
  "<180",
  "<365",
  "<720",
];
export const skinkraftlineChartData = {
  labels: commonLabels,
  datasets: [
    {
      label: "Ad Spend",
      data: getViewsAndSpend(SkinkraftData).spend,
      fill: false,
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "rgba(75,192,192,1)",
    },
  ],
};

export const skinkraftbarChartData = {
  labels: commonLabels,
  datasets: [
    {
      label: "Views",
      data: getViewsAndSpend(SkinkraftData).views,
      backgroundColor: "rgba(153, 102, 255, 0.2)",
      borderColor: "rgba(153, 102, 255, 1)",
      borderWidth: 1,
    },
  ],
};

export const vedixlineChartData = {
  labels: commonLabels,
  datasets: [
    {
      label: "Ad Spend",
      data: getViewsAndSpend(VedixData).spend,
      fill: false,
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "rgba(75,192,192,1)",
    },
  ],
};

export const vedixbarChartData = {
  labels: commonLabels,
  datasets: [
    {
      label: "Views",
      data: getViewsAndSpend(VedixData).views,
      backgroundColor: "rgba(153, 102, 255, 0.2)",
      borderColor: "rgba(153, 102, 255, 1)",
      borderWidth: 1,
    },
  ],
};

export const trayalineChartData = {
  labels: commonLabels,
  datasets: [
    {
      label: "Ad Spend",
      data: getViewsAndSpend(TrayaData).spend,
      fill: false,
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "rgba(75,192,192,1)",
    },
  ],
};

export const trayabarChartData = {
  labels: commonLabels,
  datasets: [
    {
      label: "Views",
      data: getViewsAndSpend(TrayaData).views,
      backgroundColor: "rgba(153, 102, 255, 0.2)",
      borderColor: "rgba(153, 102, 255, 1)",
      borderWidth: 1,
    },
  ],
};

// export const viewsVsSpendChartData = (viewsData, spendData) => ({
//   labels: commonLabels,
//   datasets: [
//     {
//       label: "Views",
//       data: viewsData,
//       fill: false,
//       backgroundColor: "rgba(153, 102, 255, 0.2)",
//       borderColor: "rgba(153, 102, 255, 1)",
//     },
//     {
//       label: "Spend",
//       data: spendData,
//       fill: false,
//       backgroundColor: "rgba(75,192,192,0.2)",
//       borderColor: "rgba(75,192,192,1)",
//     },
//   ],
// });

// export const skinkraftChartData = viewsVsSpendChartData(
//   getViewsAndSpend(SkinkraftData).views,
//   getViewsAndSpend(SkinkraftData).spend
// );

// export const vedixChartData = viewsVsSpendChartData(
//   getViewsAndSpend(VedixData).views,
//   getViewsAndSpend(VedixData).spend
// );

// export const trayaChartData = viewsVsSpendChartData(
//   getViewsAndSpend(TrayaData).views,
//   getViewsAndSpend(TrayaData).spend
// );

const prepareLineData = (viewsData, spendData) => {
  return {
    labels: spendData, // Use spendData as labels for the x-axis
    datasets: [
      {
        label: "Views",
        data: viewsData,
        fill: false,
        backgroundColor: "rgba(232, 53, 53, 0.4)",
        borderColor: "rgba(232, 53, 53, 0.91)",
      },
    ],
  };
};

export const skinkraftLineData = prepareLineData(
  getViewsAndSpend(SkinkraftData).views,
  getViewsAndSpend(SkinkraftData).spend
);

export const vedixLineData = prepareLineData(
  getViewsAndSpend(VedixData).views,
  getViewsAndSpend(VedixData).spend
);

export const trayaLineData = prepareLineData(
  getViewsAndSpend(TrayaData).views,
  getViewsAndSpend(TrayaData).spend
);
