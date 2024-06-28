import { StrengthWeaknessSuggestionTable } from "@/components/ComparisonTable";
import Link from "next/link";
import React, { useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";

const Summary = () => {
  const [showFullSummary, setShowFullSummary] = useState(false);

  const toggleSummary = () => {
    setShowFullSummary(!showFullSummary);
  };

  const summary = `Traya Health, targeting health-conscious individuals aged 25-45 with hair issues, demonstrates notable ad effectiveness, improving from 18 to over 28 views per dollar over four weeks. Despite spending less than SkinKraft, Traya achieves higher efficiency, with an average spend per creative exceeding $25K, highlighting a focus on quality. Traya runs 965 campaigns exclusively in the US, while SkinKraft has a minor presence in China, and Vedix has a more diverse international reach but lower overall spend.

The radar chart reveals that Traya excels in emotional impact and concept, resonating well emotionally with the audience. However, it falls behind in visuals, product focus, and interactive elements, suggesting areas for improvement to enhance engagement. Competitors like SkinKraft, with high spend but stable effectiveness, and Vedix, with a diverse international presence, score higher in novelty, audience appeal, and call to action, indicating fresher, more engaging content.

Traya's ads, utilizing the PAS (Problem-Agitate-Solve) framework with celebrity endorsements, are emotionally driven, standing out against competitors who emphasize personalization and natural solutions. To better compete, Traya should enhance its visual appeal, incorporate more scientific backing to boost credibility, and increase interactive elements in its ads. Additionally, exploring international expansion could diversify its market reach and further optimize ad spend. Balancing focus on product benefits and highlighting unique features more prominently can also strengthen Traya’s position in the market.`;

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
      Executive Summary
      </h1>
      <div className="flex items-center justify-center w-full mt-8">
        <StrengthWeaknessSuggestionTable />
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

export default Summary;
