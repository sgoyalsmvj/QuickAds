import React from "react";

const data = {
  labels: [
    "Concept",
    "Hook",
    "Novelty",
    "Audience Appeal",
    "Visuals",
    "Emotional Impact",
    "Product Focus",
    "Scientific Credibility",
    "Interactive Elements",
    "Call to Action",
  ],
  datasets: [
    {
      label: "Traya Health",
      data: [8, 8, 6, 8, 7, 9, 5, 4, 7, 9],
    },
    {
      label: "SkinKraft",
      data: [7, 7, 7, 8, 8, 8, 7, 6, 7, 9],
    },
    {
      label: "Vedix",
      data: [8, 7, 6, 8, 7, 9, 6, 5, 7, 8],
    },
  ],
};

const Insights = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full rounded-lg shadow-lg dark:bg-gray-800 dark:text-gray-200">
        <thead className="bg-blue-200 dark:bg-gray-700">
          <tr>
            <th className="px-2 py-1 md:px-4 md:py-2">Criteria</th>
            {data.datasets.map((dataset) => (
              <th key={dataset.label} className="px-2 py-1 md:px-4 md:py-2">
                {dataset.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.labels.map((label, rowIndex) => (
            <tr
              key={label}
              className="text-sm md:text-base border dark:border-gray-700"
            >
              <td className="bg-blue-200 py-2 px-4 border-b border-gray-200">
                {label}
              </td>
              {data.datasets.map((dataset, colIndex) => (
                <td
                  key={`${dataset.label}-${colIndex}`}
                  className={`py-2 px-4 border-b text-center border-gray-200 ${
                    dataset.label === "Traya Health" &&
                    (dataset.data[rowIndex] <= 5
                      ? "text-red-500 font-bold"
                      : dataset.data[rowIndex] >= 8
                      ? "text-green-500 font-bold"
                      : "")
                  }`}
                >
                  {dataset.data[rowIndex]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Insights;
