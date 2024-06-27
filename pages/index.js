import CompanyDetails from "@/components/CompanyDetails";
import VideosTable from "@/components/VideosTable";
import data1 from "../datafiles/data1.json";
import data2 from "../datafiles/data2.json";
import LineChart from "@/components/LineChart";
import BarChart from "@/components/BarChart";
import { lineChartData, barChartData } from "../datafiles/graphsData";
import DarkModeToggle from "@/components/DarkModeToggle";
import Link from "next/link";
import GraphsIndex from "@/components/GraphsIndex";
import ComparisonTable from "@/components/ComparisonTable";
import dynamic from "next/dynamic";
import { useState } from "react";

const SpiderChart = dynamic(() => import("../components/SpiderChart"), {
  ssr: false,
});

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
  const [activeComponent, setActiveComponent] = useState("GraphsIndex");

  const data = {
    traya: {
      spend: {
        today: 10643661,
        last7Days: 742,
        last14Days: 789,
        last21Days: 826,
        last30Days: 1499,
      },
      views: {
        last7Days: 13360,
        last14Days: 14619,
        last21Days: 15810,
        last30Days: 42184,
      },
      creativeCount: 334,
    },
    vedix: {
      spend: {
        today: 6488107,
        last7Days: 364,
        last14Days: 696,
        last21Days: 1228,
        last30Days: 1769,
      },
      views: {
        last7Days: 7776,
        last14Days: 14195,
        last21Days: 24360,
        last30Days: 35909,
      },
      creativeCount: 356,
    },
    skinkraft: {
      spend: {
        today: 5206623,
        last7Days: 4436,
        last14Days: 7221,
        last21Days: 11762,
        last30Days: 14477,
      },
      views: {
        last7Days: 80732,
        last14Days: 132332,
        last21Days: 231556,
        last30Days: 290719,
      },
      creativeCount: 276,
    },
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case "GraphsIndex":
        return <GraphsIndex data={data} />;
      case "SpiderChart":
        return <SpiderChart />;
      case "ComparisonTable":
        return <ComparisonTable />;
      default:
        return null;
    }
  };

  return (
    <div className="p-3 m-5">
      <div className="flex justify-around text-center text-xl mb-5">
        <Link
          className="  rounded hover:shadow-md shadow-lg flex flex-col items-center justify-center"
          href="/SkinKraftPage"
        >
          <img
            className="rounded-lg m-3 w-[100px]"
            src="https://yt3.ggpht.com/ytc/AOPolaSg5GeuKEacZOoKCQVvq7hatgj6QKRfuZBc76euWg=s88-c-k-c0x00ffffff-no-rj"
            alt="Skinkraft"
          />
        </Link>

        <Link
          href="/TrayaHealthPage"
          className="  rounded hover:shadow-md shadow-lg flex flex-col  items-center justify-center"
        >
          <img
            className="rounded-lg m-3  w-[100px]"
            src="https://yt3.ggpht.com/ytc/AOPolaQiqV1SxgrOn3bCv6j-VeWEmDeb4wjHY8L-XOYj=s88-c-k-c0x00ffffff-no-rj"
            alt="Traya Health"
          />
        </Link>

        <Link
          href="/VedixPage"
          className="  rounded hover:shadow-md shadow-lg flex flex-col  items-center justify-center"
        >
          <img
            className="rounded-lg m-3  w-[100px]"
            src="https://yt3.ggpht.com/ytc/AOPolaR8m3ZGhVrUlcR5ziohWRSQvPJBg2TTz0mXoscp=s88-c-k-c0x00ffffff-no-rj"
            alt="Vedix"
          />
        </Link>
      </div>

      <div className="flex justify-around mb-5 m-4 mt-12  ">
        <button
          className={`px-4 py-2 mx-2 ${
            activeComponent === "GraphsIndex"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => setActiveComponent("GraphsIndex")}
        >
          Graphs Index
        </button>
        <button
          className={`px-4 py-2 mx-2 ${
            activeComponent === "SpiderChart"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => setActiveComponent("SpiderChart")}
        >
          Spider Chart
        </button>
        <button
          className={`px-4 py-2 mx-2 ${
            activeComponent === "ComparisonTable"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => setActiveComponent("ComparisonTable")}
        >
          Comparison Table
        </button>
      </div>

      <div className="flex justify-center">{renderComponent()}</div>
    </div>
  );
}
