import React from "react";
import TrayaData1 from "@/datafiles/TrayaHealth1.json";
import TrayaData2 from "@/datafiles/TrayaHealth2.json";
import TrayaData3 from "@/datafiles/TrayaHealth3.json";
import CompanyDetails from "@/components/CompanyDetails";
import VideosTable from "@/components/VideosTable";
import BarChart from "@/components/BarChart";
import LineChart from "@/components/LineChart";
import { trayabarChartData, trayaChartData, trayalineChartData, trayaLineData } from "@/datafiles/graphsData";
import Link from "next/link";
import { IoArrowBackOutline } from "react-icons/io5";
import { ViewVsSpendChart } from "@/components/ViewVsSpendChart";
export const getStaticProps = async () => {
  return {
    props: {
      companyData: TrayaData1,
      videosData: {
        page: TrayaData3.data.page,
        hasMore: TrayaData3.data.hasMore,
        results: TrayaData3.data.results,
      },
    },
  };
};
const Traya = ({ companyData, videosData }) => {
  return (
    <div className="flex flex-col dark:bg-dark-background dark:text-dark-text">
      <Link className="rounded m-2 p-2 border w-max fixed bg-slate-300" href='/'><IoArrowBackOutline /></Link>
      <CompanyDetails  companyData={companyData} />
      <h1 className="p-5 m-2 font-bold text-2xl">
        Performance and Testing Volume
      </h1>
      <div className="flex flex-col items-center justify-around md:flex-row">
        <div className="w-full md:w-1/3 p-2">
          <LineChart data={trayalineChartData} />
        </div>
        <div className="w-full md:w-1/3 p-2">
          <BarChart data={trayabarChartData} />
        </div>
        <div className="w-full md:w-1/3 p-2">
          <ViewVsSpendChart data={trayaLineData}/>
        </div>
      </div>
      <VideosTable videosData={videosData} />
    </div>
  );
};

export default Traya;
