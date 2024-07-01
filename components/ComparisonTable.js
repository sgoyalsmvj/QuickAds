import React from "react";

const strengthWeaknessSuggestionData = [
  {
    Company: "Traya Health",
    Strengths: [
      "Celebrity endorsement grabs attention",
      "Strong emotional impact",
      "Clear call to action",
    ],
    Weaknesses: [
      "Limited scientific credibility",
      "Split focus between celebrity and product",
    ],
    Suggestions: [
      "Include more scientific backing to enhance credibility",
      "Balance focus more on the product benefits",
      "Highlight unique product features more prominently",
    ],
  },
  {
    Company: "SkinKraft",
    Strengths: [
      "Personalization appeals to the target audience",
      "High-quality visuals",
      "Strong call to action",
    ],
    Weaknesses: ["Average novelty", "Less focus on emotional impact"],
    Suggestions: [
      "Innovate further to differentiate from competitors",
      "Increase emotional storytelling to connect with viewers",
      "Provide more scientific data to enhance credibility",
    ],
  },
  {
    Company: "Vedix",
    Strengths: [
      "Strong emotional impact through real-life testimonials",
      "Clear focus on Ayurvedic principles",
      "Effective call to action",
    ],
    Weaknesses: [
      "Limited scientific credibility",
      "Product focus can be improved",
    ],
    Suggestions: [
      "Incorporate scientific data to support Ayurvedic claims",
      "Emphasize unique product features and benefits",
      "Balance customer stories with detailed product information",
    ],
  },
];

const remainingPropertiesData = [
  {
    Parameter: "Audience",
    Traya_Health:
      "Men and women, 25-45 years old, health-conscious, experiencing hair issues",
    SkinKraft:
      "Women, 18-40 years old, fashion-conscious, interested in personalized skincare",
    Vedix:
      "Women, 25-45 years old, interested in natural and Ayurvedic haircare solutions",
  },
  {
    Parameter: "Content",
    Traya_Health: "Celebrity endorsement",
    SkinKraft: "Customization and personalization",
    Vedix: "Ayurvedic solutions with customer stories",
  },
  {
    Parameter: "Theme vs. Others",
    Traya_Health: "Emotional appeal with celebrity",
    SkinKraft: "Focus on personalization and customization",
    Vedix: "Ayurvedic approach with testimonials",
  },
  {
    Parameter: "Ad",
    Traya_Health: "PAS (Problem-Agitate-Solve)",
    SkinKraft: "AIDA (Attention-Interest-Desire-Action)",
    Vedix: "PAS (Problem-Agitate-Solve)",
  },
  {
    Parameter: "Framework",
    Traya_Health: "Promotion",
    SkinKraft: "Personalized care",
    Vedix: "Customer testimonials",
  },
  {
    Parameter: "Hook Style",
    Traya_Health: "Celebrity endorsement",
    SkinKraft: "Personalization hook",
    Vedix: "Real-life success stories",
  },
  {
    Parameter: "Length of Ad",
    Traya_Health: "1 minute",
    SkinKraft: "1 minute",
    Vedix: "1 minute",
  },
];

const StrengthWeaknessSuggestionTable = () => {
  return (
    <div className="md:p-5 w-1/2">
      <div className="overflow-x-auto">
        <table className="table-auto w-full rounded-lg shadow-lg text-center dark:bg-gray-800 dark:text-gray-200">
          <thead className=" coolButton text-center dark:bg-gray-700">
            <tr>
              <th className="px-2 py-1 md:px-4 md:py-2">Company</th>
              <th className="px-2 py-1 md:px-4 md:py-2">Strengths</th>
              
            </tr>
          </thead>
          <tbody>
            {strengthWeaknessSuggestionData.map((item, index) => (
              <tr
                key={index}
                className="text-sm md:text-base border dark:border-gray-700"
              >
                <td className="px-2 py-1 md:px-4 md:py-2 font-medium text-gray-900 dark:text-gray-200 bg-blue-200">
                  {item.Company}
                </td>
                <td className="px-2 py-1 md:px-4 md:py-2 text-gray-900 dark:text-gray-200 text-left">
                  <ul className="list-disc list-inside">
                    {item.Strengths.map((strength, i) => (
                      <li key={i}>{strength}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const RemainingPropertiesTable = () => {
  return (
    <div className="py-4 w-full">
      <div className="overflow-x-auto">
        <table className="table-auto w-full rounded-lg shadow-lg dark:bg-gray-800 dark:text-gray-200">
          <thead className=" coolButton text-center bg-blue-200 dark:bg-gray-700">
            <tr>
              <th className="px-2 py-1 md:px-4 md:py-2">Parameter</th>
              <th className="px-2 py-1 md:px-4 md:py-2">Traya Health</th>
              <th className="px-2 py-1 md:px-4 md:py-2">SkinKraft</th>
              <th className="px-2 py-1 md:px-4 md:py-2">Vedix</th>
            </tr>
          </thead>
          <tbody>
            {remainingPropertiesData.map((data, index) => (
              <tr
                key={index}
                className="text-sm md:text-base border dark:border-gray-700"
              >
                <td className="px-2 py-1 md:px-4 md:py-2 text-gray-900 dark:text-gray-200 font-bold">
                  {data.Parameter}
                </td>
                <td className="px-2 py-1 md:px-4 md:py-2 text-gray-900 dark:text-gray-200">
                  {data.Traya_Health}
                </td>
                <td className="px-2 py-1 md:px-4 md:py-2 text-gray-900 dark:text-gray-200">
                  {data.SkinKraft}
                </td>
                <td className="px-2 py-1 md:px-4 md:py-2 text-gray-900 dark:text-gray-200">
                  {data.Vedix}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { StrengthWeaknessSuggestionTable, RemainingPropertiesTable };
