  import React from "react";
  import SkinKraftData1 from "@/datafiles/SkinKraft1.json";
  import SkinKraftData2 from "@/datafiles/SkinKraft2.json";
  import SkinKraftData3 from "@/datafiles/SkinKraft3.json";
  import CompanyDetails from "@/components/CompanyDetails";
  import VideosTable from "@/components/VideosTable";
  import BarChart from "@/components/BarChart";
  import LineChart from "@/components/LineChart";

  import Link from "next/link";
  import { IoArrowBackOutline } from "react-icons/io5";
  import { ViewVsSpendChart } from "@/components/ViewVsSpendChart";
  import { skinkraftbarChartData, skinkraftlineChartData, skinkraftLineData } from "@/datafiles/graphsData";
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
        <Link className="rounded m-2 p-2 border w-max fixed bg-slate-300" href='/'><IoArrowBackOutline /></Link>
        <CompanyDetails  companyData={companyData} />
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
            <ViewVsSpendChart data={skinkraftLineData}/>
          </div>
        </div>
        <VideosTable videosData={videosData} />
      </div>
    );
  };

  export default SkinKraft;
