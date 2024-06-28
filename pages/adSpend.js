import React, { useState } from "react";
import GraphsIndex from "@/components/GraphsIndex";
import data from "@/datafiles/contentData";
import { IoArrowBackOutline } from "react-icons/io5";
import Link from "next/link";

const AdSpend = () => {
  const [showFullSummary, setShowFullSummary] = useState(false);

  const toggleSummary = () => {
    setShowFullSummary(!showFullSummary);
  };

  const summary = `Traya Health shows significant
   improvement in ad effectiveness, increasing from 18 to over 28 views per dollar over four weeks.
    Despite lower spending compared to SkinKraft, Traya's ads are more efficient.
     Traya's average spend per creative is the highest at over $25K, indicating a focus on quality.
      Traya exclusively targets the US market with 965 campaigns.
       In contrast, SkinKraft has high spend but stable effectiveness, with a minor presence in China, while Vedix maintains 
       low spend with slight effectiveness decline but a more diverse international presence. Traya should continue optimizing 
       ad spend and consider international expansion.`;

  const shortSummary = summary.split(".").slice(0, 2).join(".") + ".";

  return (
    <div className="p-4">
      <Link
        className="rounded m-2 p-2 border w-max fixed bg-slate-300"
        href="/"
      >
        <IoArrowBackOutline />
      </Link>
      <h1 className="text-4xl font-bold text-center mt-8">
        Ad Spend & Effectiveness (Youtube)
      </h1>
      <div className="flex items-center justify-center w-full mt-8">
        <GraphsIndex data={data} />
      </div>
      <div className="mt-8 p-4  bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Summary</h2>
        <p className="text-base">{showFullSummary ? summary : shortSummary}</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-400 text-black hover:text-white rounded-full hover:bg-blue-700 transition duration-200"
          onClick={toggleSummary}
        >
          {showFullSummary ? "View Less" : "View More"}
        </button>
      </div>
    </div>
  );
};

export default AdSpend;
