import React from "react";
import { Tooltip } from "@mui/material";

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
        <thead className="bg-blue-200 coolButton text-center dark:bg-gray-700">
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
              <td className="font-bold py-2 px-4 border-b border-gray-200">
                {label}
              </td>
              {data.datasets.map((dataset, colIndex) => (
                <Tooltip
                  key={`${dataset.label}-${colIndex}`}
                  title={
                    dataset.label === "Traya Health" &&
                    dataset.data[rowIndex] <= 5 ? (
                      <div className="tooltip-content">
                        {dataset.data[rowIndex] === 5 && (
                          <div>
                            <ul>
                              <li>
                                Lack of clear emphasis on product benefits or
                                features.
                              </li>
                              <li>
                                Insufficient demonstration of how the product
                                solves customer problems.
                              </li>
                            </ul>
                            <p className="tooltip-improvement">To Improve:</p>
                            <ul>
                              <li>
                                Enhance product demonstration in ads to clearly
                                communicate benefits.
                              </li>
                              <li>
                                Highlight customer testimonials or case studies
                                that showcase product effectiveness.
                              </li>
                            </ul>
                          </div>
                        )}
                        {dataset.data[rowIndex] === 4 && (
                          <div>
                            <ul>
                              <li>
                                Lack of authoritative sources or scientific
                                evidence supporting product claims.
                              </li>
                              <li>
                                Failure to clearly communicate the research or
                                studies behind the product.
                              </li>
                            </ul>
                            <p className="tooltip-improvement">To Improve:</p>
                            <ul>
                              <li>
                                Include references to studies, research
                                findings, or endorsements from experts.
                              </li>
                              <li>
                                Ensure transparency in presenting scientific
                                data or certifications related to the product.
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>
                    ) : undefined
                  }
                  arrow
                  interactive
                  classes="custom-tooltip"
                >
                  <td
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
                </Tooltip>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <style jsx>{`
        .custom-tooltip {
          background-color: #6e37de; /* Change this color as needed */
          color: black;
          border-radius: 4px;
          padding: 8px 12px;
          font-size: 3rem;
          line-height: 1.5;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          max-width: 300px; /* Adjust maximum width as needed */
        }

        .tooltip-content ul {
          margin: 8px;
          font-size: 0.9rem;
        }

        .tooltip-content .tooltip-improvement {
          font-weight: bold;
          margin: 8px;
          font-size: 0.9rem;
        }
      `}</style>
    </div>
  );
};

export default Insights;
