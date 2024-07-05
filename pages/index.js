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
import skinkraft from "@/public/images/skinkraft.png";
import traya from "@/public/images/traya.jpeg";
import vedix from "@/public/images/vedix.jpeg";
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
import ButtonContainer from "@/components/ButtonComponent";
import Image from "next/image";

export default function Home({ companyData, videosData }) {
  return (
    <div className="flex flex-col justify-center items-center overflow-x-hidden p-4 coolBg">
      <h1 className="text-center text-4xl font-bold p-3">
        Competition Analysis
      </h1>
      <div className="flex flex-col md:flex-row justify-around text-center text-xl mt-5 mb-5 space-y-5 md:space-y-0 w-full">
        <Link
          className="w-full md:w-1/5 rounded-[1rem] transform transition duration-300 hover:scale-105 hover:shadow-xl  hover:ring-2 hover:ring-red-400 flex flex-col items-center justify-center text-left p-3 bg-red-200 border-2 border-gray-200"
          href="/SkinKraftPage"
        >
          <Image
            className="border border-slate-800 rounded-lg m-3 w-[150px]"
            src={skinkraft}
            alt="Skinkraft"
          />
          <p className="m-2 text-sm">
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
          className="w-full md:w-1/5 rounded-[1rem] transform transition duration-300 hover:scale-105 hover:shadow-xl  hover:ring-2 hover:ring-blue-400 flex flex-col items-center justify-center text-left p-3 bg-blue-200 border-2 border-gray-200"
        >
          <Image
            className="border border-slate-800 shadow-2xl rounded-lg m-3 w-[150px]"
            src={traya}
            alt="Traya Health"
          />
          <p className="m-2 text-sm">
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
          href="/trayahealthhair"
          className="w-full md:w-1/5 rounded-[1rem] transform transition duration-300 hover:scale-105 hover:shadow-xl  hover:ring-2 hover:ring-blue-400 flex flex-col items-center justify-center text-left p-3 bg-sky-200 border-2 border-gray-200"
        >
          <Image
            className="border border-slate-800 shadow-2xl rounded-lg m-3 w-[150px]"
            src={traya}
            alt="Traya.Health Hair"
          />
          <p className="m-2 text-sm">
            Welcome to <b>Traya.Health Hair</b>. We believe that health goes
            beyond the shape of your body. On this YouTube channel, we present{" "}
            <b>#HealthUncovered</b>, a campaign dedicated to exposing misleading
            ideas of health by debunking myths with scientific facts. We’ll also
            share practical health hacks, tips, home remedies, food recipes,
            transformational stories, expert advice, and more. Let's explore the
            concepts of health and fitness together, one step at a time!
          </p>
        </Link>

        <Link
          href="/VedixPage"
          className="w-full md:w-1/5 rounded-[1rem] transform transition duration-300 hover:scale-105 hover:shadow-xl  hover:ring-2 hover:ring-red-400 flex flex-col items-center justify-center text-left p-3 bg-red-200 border-2 border-gray-200"
        >
          <Image
            className="border border-slate-800 rounded-lg m-3 w-[150px]"
            src={vedix}
            alt="Vedix"
          />
          <p className="m-2 text-sm">
            Namaste! <b>Vedix</b> is India's first brand that offers customised{" "}
            <b>Ayurvedic</b> products based on a Dosha profile questionnaire. It
            has 10,00,000+ happy customers. Approved by Ayurvedic experts with
            20+ years of experience, Vedix hair care, skin care and immunity
            products are 100% natural without the risk of side effects. In this
            channel, you will find helpful customer reviews on Vedix products,
            how to use Vedix for maximum benefits, making of our customised
            products, doctors' tips, and a lot more. Stay tuned!
          </p>
        </Link>
      </div>

      <ButtonContainer />
    </div>
  );
}
