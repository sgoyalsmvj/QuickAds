import React from "react";
import TrayaData1 from "@/datafiles/TrayaHairHealth1.json";
// import TrayaData2 from "@/datafiles/TrayaHealth2.json";
import TrayaData3 from "@/datafiles/TrayaHairHealth3.json";
import trayahair1 from "@/public/images/trayahair1.png";
import trayahair2 from "@/public/images/trayahair2.png";

import CompanyDetails from "@/components/CompanyDetails";
import VideosTable from "@/components/VideosTable";
import BarChart from "@/components/BarChart";
import LineChart from "@/components/LineChart";
import {
  trayabarChartData,
  trayaChartData,
  trayahairbarChartData,
  trayahairlineChartData,
  trayahairLineData,
  trayalineChartData,
  trayaLineData,
} from "@/datafiles/graphsData";
import Link from "next/link";
import { IoArrowBackOutline } from "react-icons/io5";
import { ViewVsSpendChart } from "@/components/ViewVsSpendChart";
import Image from "next/image";
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
    <div className="flex flex-col dark:bg-dark-background dark:text-dark-text coolBg">
      <Link
        className="rounded m-2 p-2 border w-max fixed bg-slate-300"
        href="/"
      >
        <IoArrowBackOutline />
      </Link>
      <CompanyDetails companyData={companyData} />
      <h1 className="p-5 m-2 font-bold text-2xl">
        Performance and Testing Volume
      </h1>
      <div className="flex flex-col items-center justify-around md:flex-row">
        <div className="w-full md:w-1/3 p-2">
          <LineChart data={trayahairlineChartData} />
        </div>
        <div className="w-full md:w-1/3 p-2">
          <BarChart data={trayahairbarChartData} />
        </div>
        <div className="w-full md:w-1/3 p-2">
          <ViewVsSpendChart data={trayahairLineData} />
        </div>
      </div>
      <VideosTable videosData={videosData} />
      <div className="flex justify-center items-center flex-col space-y-3 m-3">
        <div className="flex flex-col items-center justify-center">
          <h1 className="p-5 m-2 font-bold text-2xl">Creative Lifespan</h1>
          <Image className="w-3/4" src={trayahair2} />
        </div>
        <h1 className="p-5 m-2 font-bold text-2xl">
          Success Rate (Number of video
          ads, grouped by spend)
        </h1>
        <Image className="w-1/2" src={trayahair1} />
      </div>
    </div>
  );
};

export default Traya;
