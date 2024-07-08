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

  const summary = `Traya Health, including both Traya and Traya Hair handles, exhibits notable distinctions in ad performance and spending patterns. Over the past four weeks, Traya shows a significant decline in ad effectiveness, with views per dollar decreasing from over 28 to around 18. In contrast, Traya Hair maintains low effectiveness, with a flat trend around 14-16 views per dollar, despite high and increasing spending, which reaches over $700K by the most recent week.\n
  SkinKraft maintains stable ad effectiveness around 18-20 views per dollar with a consistent but lower spend compared to Traya Hair. The average spend per creative for SkinKraft is around $20K.\n
  Vedix has a relatively low spend with a slight decline in effectiveness from around 22 to 18 views per dollar over the past four weeks. Despite this, Vedix has a more diverse international presence, including campaigns in Saudi Arabia, UAE, and the USA.\n
  Traya's average spend per creative is the highest at over $30K, indicating a focus on quality, whereas Traya Hair's high spending does not translate into high effectiveness.\n
  Both Traya and Traya Hair exclusively target the Indian market with 965 and 1088 campaigns, respectively. In contrast, SkinKraft has a minor presence in the UAE, and Vedix has a more diverse international presence.\n`

  
  // Recommendations:
  //  Traya should investigate the factors causing the decline in ad effectiveness and consider optimizing ad strategies to reverse this trend.
    // Traya Hair needs to evaluate the effectiveness of its high spending and explore strategies to enhance ad performance.
    // SkinKraft should explore increasing its ad spend moderately to potentially improve effectiveness while maintaining its stable performance.
      // Vedix could benefit from analyzing its ad strategies to address the declining effectiveness and further capitalize on its international presence.\n`;

  const summaryLines = summary.split("\n").filter((line) => line.trim() !== ""); // Filter out empty lines

  const shortSummary = summaryLines.slice(0, 3).join("\n");

  return (
    <div className="p-4 flex  flex-col justify-center w-full">
      <Link
        className="rounded m-2 p-2 border w-max fixed top-0 left-0 bg-slate-300"
        href="/"
      >
        <IoArrowBackOutline />
      </Link>
      <h1 className="text-4xl font-bold text-center mt-8">
        Ad Spend & Effectiveness (Youtube)
      </h1>
      <div className="mt-8 p-4 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Summary</h2>
        <ul className="list-disc list-inside">
          {summaryLines.map((line, index) => (
            <li
              key={index}
              className={`text-base ${
                index < 3 || showFullSummary ? "" : "hidden"
              }`}
            >
              {line.trim()}
            </li>
          ))}
        </ul>
        {summaryLines.length > 3 && (
          <button
            className="mt-4 px-4 py-2 coolButton text-center text-black hover:text-white rounded-full hover:bg-blue-700 transition duration-200"
            onClick={toggleSummary}
          >
            {showFullSummary ? "View Less" : "View More"}
          </button>
        )}
      </div>
      <div className="flex items-center justify-center w-full mt-8">
        <GraphsIndex data={data} />
      </div>
    </div>
  );
};

export default AdSpend;
