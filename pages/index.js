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

import data from "@/datafiles/contentData";
export default function Home({ companyData, videosData }) {
  return (
    <div className="p-3 m-5 flex flex-col justify-center ">
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
          <p className="m-2 text-base">
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
          <p className="m-2 text-base">
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
          <p className="m-2 text-base">
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

      <div className="flex justify-around mb-5 mt-7">
        <Link href={"/adSpend"}>
          <button className={`px-4 py-2 mx-2 ${"bg-blue-500 text-white"} rounded-md`}>
            Ad Spend & Effectiveness
          </button>
        </Link>
        <Link href={"/swot"}>
          <button className={`px-4 py-2 mx-2 ${"bg-blue-500 text-white"} rounded-md`}>
            Content SWOT
          </button>
        </Link>

        <Link href={"/contentStrategy"}>
          <button className={`px-4 py-2 mx-2 ${"bg-blue-500 text-white"} rounded-md`}>
            Content Strategy
          </button>
        </Link>
        <Link href={"/summary"}>
          <button className={`px-4 py-2 mx-2 ${"bg-blue-500 text-white"} rounded-md`}>
            Summary
          </button>
        </Link>
      </div>
    </div>
  );
}
