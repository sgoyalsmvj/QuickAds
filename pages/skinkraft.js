import React from "react";
import SkinKraft1 from "@/datafiles/SkinKraft1.json";
import SkinKraft2 from "@/datafiles/SkinKraft2.json";
import SkinKraft3 from "@/datafiles/SkinKraft3.json";
import CompanyDetails from "@/components/CompanyDetails";
import VideosTable from "@/components/VideosTable";
import BarChart from "@/components/BarChart";
import LineChart from "@/components/LineChart";
import { barChartData, lineChartData, skinkraftbarChartData, skinkraftlineChartData } from "@/datafiles/graphsData";
import Link from "next/link";
import { IoArrowBackOutline } from "react-icons/io5";
export const getStaticProps = async () => {
  return {
    props: {
      companyData: SkinKraft1,
      videosData: {
        page: SkinKraft3.data.page,
        hasMore: SkinKraft3.data.hasMore,
        results: SkinKraft3.data.results,
      },
    },
  };
};
const SkinKraft = ({ companyData, videosData }) => {
  return (
    <div className="flex flex-col dark:bg-dark-background dark:text-dark-text">
      <Link className="rounded m-2 p-2 border w-max fixed bg-slate-300" href='/'><IoArrowBackOutline /></Link>
      <CompanyDetails  companyData={companyData} />
      <h1 className="p-5 m-2 font-bold text-2xl">
        Performance and Testing Volume
      </h1>
      <div className="flex flex-col items-center justify-around md:flex-row">
        <div className="w-full md:w-1/2 p-2">
          <LineChart data={skinkraftlineChartData} />
        </div>
        <div className="w-full md:w-1/2 p-2">
          <BarChart data={skinkraftbarChartData} />
        </div>
      </div>
      <VideosTable videosData={videosData} />
    </div>
  );
};

export default SkinKraft;
