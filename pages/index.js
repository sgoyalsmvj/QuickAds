import CompanyDetails from "@/components/CompanyDetails";
import VideosTable from "@/components/VideosTable";
import data1 from "../datafiles/data1.json";
import data2 from "../datafiles/data2.json";
import LineChart from "@/components/LineChart";
import BarChart from "@/components/BarChart";
import { lineChartData, barChartData } from "../datafiles/graphsData";
import DarkModeToggle from "@/components/DarkModeToggle";
import Link from "next/link";

export const getStaticProps = async () => {
  return {
    props: {
      companyData: data1,
      videosData: {
        page: data2.data.page,
        hasMore: data2.data.hasMore,
        results: data2.data.results,
      },
    },
  };
};

export default function Home({ companyData, videosData }) {
  return (
    <div>
      
      <div className="flex items-center justify-center space-x-3 bg-gray-500 p-3 text-white ">
        <Link href="/SkinKraftPage">Skinkraft</Link>
        <Link href="/TrayaHealthPage">Traya</Link>
        <Link href="/VedixPage">Vedix</Link>
      </div>
    </div>
    // <div className="flex flex-col dark:bg-dark-background dark:text-dark-text">

    //   <CompanyDetails companyData={companyData} />
    //   <h1 className="p-5 m-2 font-bold text-2xl">
    //     Performance and Testing Volume
    //   </h1>
    //   <div className="flex flex-col items-center justify-around md:flex-row">
    //     <div className="w-full md:w-1/2 p-2">
    //       <LineChart data={lineChartData} />
    //     </div>
    //     <div className="w-full md:w-1/2 p-2">
    //       <BarChart data={barChartData} />
    //     </div>
    //   </div>
    //   <VideosTable videosData={videosData} />
    // </div>
  );
}
