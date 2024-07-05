import React from "react";
import SkinKraftData1 from "@/datafiles/SkinKraft1.json";
import SkinKraftData2 from "@/datafiles/SkinKraft2.json";
import SkinKraftData3 from "@/datafiles/SkinKraft3.json";
import skinkraft1 from "@/public/images/skinkraft1.png";
import skinkraft2 from "@/public/images/skinkraft2.png";

import CompanyDetails from "@/components/CompanyDetails";
import VideosTable from "@/components/VideosTable";
import BarChart from "@/components/BarChart";
import LineChart from "@/components/LineChart";

import Link from "next/link";
import { IoArrowBackOutline } from "react-icons/io5";
import { ViewVsSpendChart } from "@/components/ViewVsSpendChart";
import {
  skinkraftbarChartData,
  skinkraftlineChartData,
  skinkraftLineData,
} from "@/datafiles/graphsData";
import Image from "next/image";
export const getStaticProps = async () => {
  return {
    props: {
      companyData: SkinKraftData1,
      videosData: {
        page: SkinKraftData3.data.page,
        hasMore: SkinKraftData3.data.hasMore,
        results: SkinKraftData3.data.results,
      },
    },
  };
};
const SkinKraft = ({ companyData, videosData }) => {
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
          <LineChart data={skinkraftlineChartData} />
        </div>
        <div className="w-full md:w-1/3 p-2">
          <BarChart data={skinkraftbarChartData} />
        </div>
        <div className="w-full md:w-1/3 p-2">
          <ViewVsSpendChart data={skinkraftLineData} />
        </div>
      </div>
      <VideosTable videosData={videosData} />
      <div className="flex justify-center items-center flex-col space-y-3 m-3">
        <div className="flex flex-col items-center justify-center">
          <h1 className="p-5 m-2 font-bold text-2xl">Creative Lifespan</h1>
          <Image className="w-3/4" src={skinkraft2} />
        </div>
        <h1 className="p-5 m-2 font-bold text-2xl">
          Success Rate (Number of video ads, grouped by spend)
        </h1>
        <Image className="w-1/2" src={skinkraft1} />
      </div>
    </div>
  );
};

export default SkinKraft;
