import SpiderChart from "@/components/SpiderChart";
import Link from "next/link";
import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";

const Swot = () => {
  return (
    <div>
      <Link
        className="rounded m-2 p-2 border w-max fixed bg-slate-300"
        href="/"
      >
        <IoArrowBackOutline />
      </Link>
      <h1 className="text-4xl font-bold text-center mt-4 mb-4">
        SWOT Analysis
      </h1>
      <div className="flex items-center justify-center w-full ">
        <SpiderChart />
      </div>
    </div>
  );
};

export default Swot;
