import { RemainingPropertiesTable } from "@/components/ComparisonTable";
import Link from "next/link";
import React, { useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";

const ContentStrategyPage = () => {
  const [showFullSummary, setShowFullSummary] = useState(false);

  const toggleSummary = () => {
    setShowFullSummary(!showFullSummary);
  };

  const summary = `Traya Health targets health-conscious individuals aged 25-45 with hair issues, using celebrity endorsements and emotional appeal in 1-minute PAS (Problem-Agitate-Solve) framework ads. Competitors SkinKraft and Vedix focus on women, with SkinKraft targeting 18-40-year-olds interested in personalized skincare through customization and the AIDA framework, and Vedix targeting 25-45-year-olds interested in Ayurvedic haircare using customer stories and the PAS framework. Traya's strategy stands out for its emotional, celebrity-driven content, while competitors emphasize personalization and natural solutions.`;

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
        Content Strategy
      </h1>
      <div className="flex items-center justify-center w-full mt-8">
        <RemainingPropertiesTable />
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

export default ContentStrategyPage;
