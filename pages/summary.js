import { StrengthWeaknessSuggestionTable } from "@/components/ComparisonTable";
import Link from "next/link";
import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";

const Summary = () => {
  return (
    <div>
      <Link
        className="rounded m-2 p-2 border w-max fixed bg-slate-300"
        href="/"
      >
        <IoArrowBackOutline />
      </Link>
      <h1 className="text-4xl font-bold text-center mt-8 mb-4">Summary</h1>
      <div className="flex items-center justify-center w-full ">
        <StrengthWeaknessSuggestionTable />
      </div>
    </div>
  );
};

export default Summary;
