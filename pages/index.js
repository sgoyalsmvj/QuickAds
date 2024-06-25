import CompanyDetails from "@/components/CompanyDetails";
import VideosTable from "@/components/VideosTable";
import data1 from "../datafiles/data1.json";
import data2 from "../datafiles/data2.json";
import LineChart from "@/components/LineChart";
import BarChart from "@/components/BarChart";
import { lineChartData, barChartData } from "../datafiles/graphsData";

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
    <div className="flex flex-col">
      <CompanyDetails companyData={companyData} />
      <h1 className="p-5 m-2 font-bold text-2xl">
        Performance and Testing Volume
      </h1>
      <div className="flex flex-col items-center justify-around md:flex-row">
        <div className="w-full md:w-1/2 p-2">
          <LineChart data={lineChartData} />
        </div>
        <div className="w-full md:w-1/2 p-2">
          <BarChart data={barChartData} />
        </div>
      </div>
      <VideosTable videosData={videosData} />
    </div>
  );
}
