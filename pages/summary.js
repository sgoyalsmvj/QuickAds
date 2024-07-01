import { StrengthWeaknessSuggestionTable } from "@/components/ComparisonTable";
import ImprovementTable from "@/components/Improvement";
import Link from "next/link";
import React, { useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";

const Summary = () => {
  const [showFullSummary, setShowFullSummary] = useState(false);

  const toggleSummary = () => {
    setShowFullSummary(!showFullSummary);
  };

  const summary = `
Overview:
This summary evaluates the recent Traya Health commercial featuring a celebrity, identifying strengths, weaknesses, and suggestions for improvement. Additionally, relevant data on ad effectiveness and spend is included to provide a comprehensive overview.

Strengths:
- Celebrity Endorsement: The presence of a well-known figure enhances credibility and grabs attention.
- Personal Story: The celebrity’s personal experience creates relatability and engagement.
- Humor: The ad’s humor increases viewer enjoyment and memorability.
- Clear Product Explanation: Effectively communicates product benefits.
- Visual Appeal: High-quality production values.

Weaknesses:
- Lack of Visual Comparisons: No before and after visuals to demonstrate effectiveness.
- Limited User Testimonials: Focuses solely on the celebrity's experience, lacking diverse user perspectives.

Suggestions for Improvement:
1. Incorporate Before and After Comparisons:
   - Current Scene: The celebrity discusses their hair care routine.
   - Current Transcription: "I've been using Traya Health products and my hair feels much better."
   - Improved Scene: Show the celebrity’s hair transformation. "Watch the incredible hair transformation with Traya Health. From thinning hair to a fuller, healthier look in just 6 months!"

2. Add Diverse User Testimonials:
   - Current Scene: Focuses on the celebrity's experience.
   - Current Transcription: "I love using Traya Health products."
   - Improved Scene: Feature other users. "Meet Arjun, who regained his confidence with Traya Health. 'I never thought I'd see such improvement,' he shares, showing his before and after photos."

Relevant Data Insights:
- Traya Health shows significant improvement in ad effectiveness, increasing from 18 to over 28 views per dollar over four weeks.
- Despite lower spending compared to SkinKraft, Traya's ads are more efficient.
- Traya's average spend per creative is the highest at over $25K, indicating a focus on quality.
- Weekly spend comparison shows Traya maintains a steady spend with increasing effectiveness.
- Traya exclusively targets the US market with 965 campaigns.
- SkinKraft has high spend but stable effectiveness, with a minor presence in China.
- Vedix maintains low spend with slight effectiveness decline but has a more diverse international presence.

Conclusion:
By incorporating visual comparisons and diverse testimonials, Traya Health can enhance its ad’s credibility and engagement, leading to higher customer trust and conversions. Additionally, maintaining the focus on high-quality ad spend and considering international market expansion could further boost Traya Health’s market presence and effectiveness.
  `;

  const summaryLines = summary.trim().split("\n");

  const formatLine = (line, index) => {
    if (line.startsWith("Executive Summary") || line.startsWith("Overview:") || line.startsWith("Strengths:") || line.startsWith("Weaknesses:") || line.startsWith("Suggestions for Improvement:") || line.startsWith("Relevant Data Insights:") || line.startsWith("Conclusion:")) {
      return (
        <li key={index} className="font-bold mt-4 mb-2">
          {line}
        </li>
      );
    } else if (line.startsWith("-")) {
      return (
        <li key={index} className="ml-4 list-disc">
          {line.replace("-", "").trim()}
        </li>
      );
    } else if (line.startsWith("1.") || line.startsWith("2.")) {
      return (
        <li key={index} className="mt-2">
          {line}
        </li>
      );
    } else if (line.startsWith("   -")) {
      return (
        <li key={index} className="ml-8 list-disc">
          {line.replace("   -", "").trim()}
        </li>
      );
    } else {
      return (
        <li key={index} className="ml-4">
          {line}
        </li>
      );
    }
  };

  return (
    <div className="p-4 flex items-center justify-center flex-col coolBg">
      <Link
        href="/"
        className="rounded m-2 p-2 border w-max fixed left-0 top-0 bg-slate-300"
      >
        <IoArrowBackOutline />
      </Link>

      <h1 className="text-3xl md:text-4xl font-bold text-center mt-8">
        Executive Summary
      </h1>
      <div className="mt-8 m-4 p-4 bg-gray-100 rounded-lg shadow-md overflow-y-auto max-h-[600px]">
        <h2 className="text-2xl font-bold mb-4">Summary</h2>
        <ul>
          {summaryLines
            .slice(0, showFullSummary ? summaryLines.length : 10)
            .map((line, index) => formatLine(line, index))}
        </ul>
        {summaryLines.length > 10 && (
          <button
            className="mt-4 px-4 py-2 bg-blue-400 coolButton text-black hover:text-white rounded-full hover:bg-blue-700 transition duration-200"
            onClick={toggleSummary}
          >
            {showFullSummary ? "View Less" : "View More"}
          </button>
        )}
      </div>
      <div className="flex items-center justify-center w-full mt-8">
        <ImprovementTable />
      </div>
    </div>
  );
};

export default Summary;
