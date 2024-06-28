import Insights from "@/components/Insights";
import SpiderChart from "@/components/SpiderChart";
import Link from "next/link";
import React, { useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";

const Swot = () => {
  const [showFullSummary, setShowFullSummary] = useState(false);

  const toggleSummary = () => {
    setShowFullSummary(!showFullSummary);
  };

  const summary = `
The radar chart reveals key differences between Traya Health and its competitors in various marketing aspects. Traya excels in emotional impact and has a strong concept, indicating its ads resonate well emotionally with the audience. However, it falls behind in visuals, meaning its ads might not be as visually appealing as competitors. Traya also lags in product focus and interactive elements, suggesting it could do more to highlight its products and engage the audience interactively. While Traya's hook is effective, its audience appeal and scientific credibility need improvement to build trust and interest. Competitors score higher in novelty, audience appeal, and call to action, indicating they offer fresher, more engaging, and action-driven content. To compete better, Traya should enhance its visual appeal, strengthen scientific credibility, and incorporate more interactive elements in its ads, making them more engaging and trustworthy for the audience.`;

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
        Competitor Video Analysis{" "}
      </h1>
      <div className="flex items-center justify-around w-full mt-8">
        <SpiderChart />
        <Insights />
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

export default Swot;
