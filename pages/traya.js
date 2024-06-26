import React from "react";
import Traya1 from "@/datafiles/Trayahealth1.json";
import Traya2 from "@/datafiles/Trayahealth2.json";
import Traya3 from "@/datafiles/Trayahealth3.json";
import CompanyDetails from "@/components/CompanyDetails";
import VideosTable from "@/components/VideosTable";
import BarChart from "@/components/BarChart";
import LineChart from "@/components/LineChart";
import { barChartData, lineChartData, trayabarChartData, trayalineChartData } from "@/datafiles/graphsData";
import Link from "next/link";
import { IoArrowBackOutline } from "react-icons/io5";
export const getStaticProps = async () => {
  return {
    props: {
      companyData: Traya1,
      videosData: {
        page: Traya3.data.page,
        hasMore: Traya3.data.hasMore,
        results: Traya3.data.results,
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
        <div className="w-full md:w-1/2 p-2">
          <LineChart data={trayalineChartData} />
        </div>
        <div className="w-full md:w-1/2 p-2">
          <BarChart data={trayabarChartData} />
        </div>
      </div>
      <VideosTable videosData={videosData} />
    </div>
  );
};

export default Traya;
