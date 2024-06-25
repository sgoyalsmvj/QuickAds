import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoArrowForwardOutline } from "react-icons/io5";

const VideosTable = ({ videosData }) => {
  console.log(videosData);
  return (
    <div className="p-5 overflow-x-auto">
      <table className="table-auto w-full rounded-lg  shadow-lg   ">
        <thead className="border rounded-lg bg-gray-100">
          <tr>
            <th className="px-2 py-1 md:px-4 md:py-2">Thumbnail</th>
            <th className="px-2 py-1 md:px-4 md:py-2">Title</th>
            <th className="px-2 py-1 md:px-4 md:py-2">Brand</th>
            <th className="px-2 py-1 md:px-4 md:py-2">Total Ad Spend</th>
            <th className="px-2 py-1 md:px-4 md:py-2">Ad Spend Last 30 Days</th>
            <th className="px-2 py-1 md:px-4 md:py-2">Publish Date</th>
            <th className="px-2 py-1 md:px-4 md:py-2">Duration</th>
          </tr>
        </thead>
        <tbody>
          {videosData.results.map((video, index) => (
            <tr key={index} className="text-sm md:text-base border">
              <td className="   px-2 py-1 md:px-4 md:py-2">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className=" rounded-full w-16 h-16 object-cover"
                />
              </td>
              <td className=" font-semibold   px-2 py-1 md:px-4 md:py-2">
                {video.title}
              </td>
              <td className=" font-semibold text-blue-400  px-2 py-1 md:px-4 md:py-2">
                {video.brandName}
              </td>
              <td className="   px-2 py-1 md:px-4 md:py-2">
                ${video.totalSpend ? video.totalSpend : 0}
              </td>
              <td className="   px-2 py-1 md:px-4 md:py-2">
                ${video.last30Days ? video.last30Days : 0}
              </td>
              <td className="   px-2 py-1 md:px-4 md:py-2">
                {video.publishedAt.split("T")[0]}
              </td>
              <td className="   px-2 py-1 md:px-4 md:py-2">
                {video.duration}s{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center justify-center p-2 space-x-4">
        <button
          className="shadow px-3 border py-2 bg-gray-100 rounded-lg"
          disabled={videosData.page == 1}
        >
          <IoArrowBackOutline />
        </button>
        <span className="mx-2">{videosData.page}</span>
        <button
          className="shadow border px-3 py-2 bg-gray-100 rounded-lg"
          disabled={videosData.hasMore == false}
        >
          <IoArrowForwardOutline />
        </button>
      </div>
    </div>
  );
};

export default VideosTable;
