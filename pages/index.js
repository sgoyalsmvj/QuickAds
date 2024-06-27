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
import ComparisonTable, {
  RemainingPropertiesTable,
  StrengthWeaknessSuggestionTable,
} from "@/components/ComparisonTable";
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
        return <RemainingPropertiesTable />;
      case "SummaryTable":
        return <StrengthWeaknessSuggestionTable />;
      default:
        return null;
    }
  };

  return (
    <div className="p-3 m-5">
      <div className="flex justify-around text-center text-xl mb-5">
        <Link
          className=" w-1/4 rounded hover:shadow-md shadow-lg flex flex-col items-center justify-center text-left p-3 bg-blue-200"
          href="/SkinKraftPage"
        >
          <img
            className="rounded-lg m-3 w-[150px]"
            src="https://yt3.ggpht.com/ytc/AOPolaSg5GeuKEacZOoKCQVvq7hatgj6QKRfuZBc76euWg=s88-c-k-c0x00ffffff-no-rj"
            alt="Skinkraft"
          />
          <p className="m-2">
            <b>SkinKraft</b> recommends customized regimens for your skin and
            hair through a unique quiz. Our formulation team has worked on these
            customized solutions based on the skin profiles of 800 women. 10,000
            hours of <b>research</b> went into the making of these products.
            Stay tuned to our channel to watch videos on SkinKraft product
            instructions, customer <b>reviews</b>, testimonials, making of
            products, and a lot more!
          </p>
        </Link>

        <Link
          href="/TrayaHealthPage"
          className=" w-1/4 rounded hover:shadow-md shadow-lg flex flex-col items-center justify-center text-left p-3 bg-blue-200"
        >
          <img
            className="rounded-lg m-3 w-[150px]"
            src="https://yt3.ggpht.com/ytc/AOPolaR8m3ZGhVrUlcR5ziohWRSQvPJBg2TTz0mXoscp=s88-c-k-c0x00ffffff-no-rj"
            alt="Traya Health"
          />
          <p className="m-2">
            Welcome to <b>Traya Health</b>. We believe that health goes beyond
            the shape of your body. Hence in this YouTube channel, we bring you
            #<b>HealthUncovered</b>, a campaign where we will blow the whistle
            on the misleading ideas of health by busting myths with scientific
            facts. Additionally, we’ll share useful health hacks, tips, home
            remedies, food recipes, transformational stories, expert advice and
            more. Let's understand concepts of health and fitness together, one
            step at a time!
          </p>
        </Link>

        <Link
          href="/VedixPage"
          className=" w-1/4 rounded hover:shadow-md shadow-lg flex flex-col items-center justify-center text-left p-3 bg-blue-200"
        >
          <img
            className="rounded-lg m-3 w-[150px]"
            src="https://yt3.ggpht.com/ytc/AOPolaQiqV1SxgrOn3bCv6j-VeWEmDeb4wjHY8L-XOYj=s88-c-k-c0x00ffffff-no-rj"
            alt="Vedix"
          />
          <p className="m-2">
            Namaste! <b>Vedix</b> is India's first brand that offers customised
            <b> Ayurvedic </b>products based on a Dosha profile questionnaire.
            It has 10,00,000+ happy customers. Approved by Ayurvedic experts
            with 20+ years of experience, Vedix hair care, skin care and
            immunity products are 100% natural without the risk of side
            effects.In this channel, you will find helpful customer reviews on
            Vedix products, how to use Vedix for maximum benefits, making of our
            customised products, doctors' tips, and a lot more. Stay tuned!,
          </p>
        </Link>
      </div>

      <div className="flex justify-around mb-5">
        <button
          className={`px-4 py-2 mx-2 ${
            activeComponent === "GraphsIndex"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => setActiveComponent("GraphsIndex")}
        >
          Ad Spend & Effectiveness
        </button>
        <button
          className={`px-4 py-2 mx-2 ${
            activeComponent === "SpiderChart"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => setActiveComponent("SpiderChart")}
        >
          Content SWOT
        </button>
        <button
          className={`px-4 py-2 mx-2 ${
            activeComponent === "ComparisonTable"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => setActiveComponent("ComparisonTable")}
        >
          Content Strategy
        </button>
        <button
          className={`px-4 py-2 mx-2 ${
            activeComponent === "SummaryTable"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => setActiveComponent("SummaryTable")}
        >
          Summary
        </button>
      </div>

      <div className="flex justify-center">{renderComponent()}</div>
    </div>
  );
}
