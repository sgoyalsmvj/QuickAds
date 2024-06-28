import GraphsIndex from "@/components/GraphsIndex";
import React from "react";
import data from "@/datafiles/contentData";
import { IoArrowBackOutline } from "react-icons/io5";
import Link from "next/link";
const AdSpend = () => {
  // console.log(data);
  return (
    <div>
      <Link
        className="rounded m-2 p-2 border w-max fixed bg-slate-300"
        href="/"
      >
        <IoArrowBackOutline />
      </Link>
      <h1 className="text-4xl font-bold text-center mt-8">
        Ad Spend & Effectiveness
      </h1>
      <div className="flex items-center justify-center w-full">
        <GraphsIndex data={data} />
      </div>
    </div>
  );
};

export default AdSpend;
