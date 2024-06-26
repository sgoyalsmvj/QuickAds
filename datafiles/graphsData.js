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
    if (key !== "collected_on") {
      views.push(value);
    }
  }

  for (const [key, value] of Object.entries(spendData)) {
    if (key !== "collected_on") {
      spend.push(value);
    }
  }

  return { views, spend };
}
export const skinkraftlineChartData = {
  labels: [
    "today",
    "<7Days",
    "<14Days",
    "<21Days",
    "<30Days",
    "<60Days",
    "<90Days",
    "<180Days",
    "<365Days",
    "<720Days",
  ],
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
  labels: [
    "today",
    "<7Days",
    "<14Days",
    "<21Days",
    "<30Days",
    "<60Days",
    "<90Days",
    "<180Days",
    "<365Days",
    "<720Days",
  ],
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
  labels: [
    "today",
    "<7Days",
    "<14Days",
    "<21Days",
    "<30Days",
    "<60Days",
    "<90Days",
    "<180Days",
    "<365Days",
    "<720Days",
  ],
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
  labels: [
    "today",
    "<7Days",
    "<14Days",
    "<21Days",
    "<30Days",
    "<60Days",
    "<90Days",
    "<180Days",
    "<365Days",
    "<720Days",
  ],
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
  labels: [
    "today",
    "<7Days",
    "<14Days",
    "<21Days",
    "<30Days",
    "<60Days",
    "<90Days",
    "<180Days",
    "<365Days",
    "<720Days",
  ],
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
  labels: [
    "today",
    "<7Days",
    "<14Days",
    "<21Days",
    "<30Days",
    "<60Days",
    "<90Days",
    "<180Days",
    "<365Days",
    "<720Days",
  ],
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