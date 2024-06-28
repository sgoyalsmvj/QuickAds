import { StrengthWeaknessSuggestionTable } from "@/components/ComparisonTable";
import Link from "next/link";
import React, { useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";

const Summary = () => {
  const [showFullSummary, setShowFullSummary] = useState(false);

  const toggleSummary = () => {
    setShowFullSummary(!showFullSummary);
  };

  const summary = `
    Traya Health excels in leveraging celebrity endorsements and creating emotional impact but needs to enhance scientific credibility and product focus.
    
    Improvement Areas:
    
    What to Improve: Enhance scientific credibility.
    How to Improve: Integrate scientific data and expert testimonials alongside celebrity endorsements.
    Where Competitors Are Better: Competitors like SkinKraft and Vedix provide more personalized and scientifically backed claims.
    
    \nWhat to Improve: Balance focus between celebrity and product.
    How to Improve: Ensure ads highlight product benefits as much as the celebrity endorsement.
    Where Competitors Are Better: SkinKraft effectively balances personalization and product focus in their ads.
    
    \nWhat to Improve: Highlight unique product features more prominently.
    How to Improve: Create content that emphasizes the unique benefits and scientific backing of the product.
    Where Competitors Are Better: Vedix highlights the uniqueness of their Ayurvedic principles alongside customer testimonials.
  `;

  const summaryLines = summary.split("\n");

  const shortSummary = summaryLines.slice(0, 3).join("\n");

  const formatLine = (line) => {
    const colonIndex = line.indexOf(":");
    if (colonIndex !== -1) {
      const beforeColon = line.slice(0, colonIndex + 1); // Include colon in bold part
      const afterColon = line.slice(colonIndex + 1);
      return (
        <>
          <span className="font-bold">{beforeColon}</span>{afterColon}
        </>
      );
    }
    return line;
  };

  return (
    <div className="p-4">
      <Link href="/" className="rounded m-2 p-2 border w-max fixed bg-slate-300">
        <IoArrowBackOutline />
      </Link>

      <h1 className="text-4xl font-bold text-center mt-8">Executive Summary</h1>
      <div className="mt-8 p-4 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Summary</h2>
        {summaryLines.map((line, index) => (
          <p key={index} className={`text-base ${index < 3 || showFullSummary ? '' : 'hidden'}`}>
            {formatLine(line)}
          </p>
        ))}
        {summaryLines.length > 3 && (
          <button
            className="mt-4 px-4 py-2 bg-blue-400 text-black hover:text-white rounded-full hover:bg-blue-700 transition duration-200"
            onClick={toggleSummary}
          >
            {showFullSummary ? "View Less" : "View More"}
          </button>
        )}
      </div>
      <div className="flex items-center justify-center w-full mt-8">
        <StrengthWeaknessSuggestionTable />
      </div>
    </div>
  );
};

export default Summary;
