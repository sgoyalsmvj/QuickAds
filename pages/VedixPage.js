import React from "react";
import VedixData1 from "@/datafiles/Vedix1.json";
import VedixData2 from "@/datafiles/Vedix2.json";
import VedixData3 from "@/datafiles/Vedix3.json";
import CompanyDetails from "@/components/CompanyDetails";
import VideosTable from "@/components/VideosTable";
import BarChart from "@/components/BarChart";
import LineChart from "@/components/LineChart";
import { vedixbarChartData, vedixlineChartData } from "@/datafiles/graphsData";
import Link from "next/link";
import { IoArrowBackOutline } from "react-icons/io5";
export const getStaticProps = async () => {
  return {
    props: {
      companyData: VedixData1,
      videosData: {
        page: VedixData3.data.page,
        hasMore: VedixData3.data.hasMore,
        results: VedixData3.data.results,
      },
    },
  };
};
const Vedix = ({ companyData, videosData }) => {
  return (
    <div className="flex flex-col dark:bg-dark-background dark:text-dark-text">
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
        <div className="w-full md:w-1/2 p-2">
          <LineChart data={vedixlineChartData} />
        </div>
        <div className="w-full md:w-1/2 p-2">
          <BarChart data={vedixbarChartData} />
        </div>
      </div>
      <VideosTable videosData={videosData} />
    </div>
  );
};

export default Vedix;
