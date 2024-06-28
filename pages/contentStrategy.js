import { RemainingPropertiesTable } from "@/components/ComparisonTable";
import Link from "next/link";
import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";

const ContentStrategyPage = () => {
  return (
    <div>
      <Link
        className="rounded m-2 p-2 border w-max fixed bg-slate-300"
        href="/"
      >
        <IoArrowBackOutline />
      </Link>
      <h1 className="text-4xl font-bold text-center mt-8 mb-4">
        Content Strategy
      </h1>
      <div className="flex items-center justify-center w-full ">
        <RemainingPropertiesTable />
      </div>
    </div>
  );
};

export default ContentStrategyPage;
