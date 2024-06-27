import React from "react";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";

export function addCommasToNumber(number) {
  const numStr = number.toString();
  const regex = /\B(?=(\d{3})+(?!\d))/g;
  return numStr.replace(regex, ',');
}

export function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds =
    remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

export function getRelativeTimeSpan(dateString) {
  const publishDate = new Date(dateString);
  const currentDate = new Date();
  const diffTime = Math.abs(currentDate - publishDate);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays <= 7) return "In last 7 days";
  if (diffDays <= 30) return "In last 30 days";
  if (diffDays <= 60) return "In last 60 days";
  if (diffDays <= 90) return "In last 90 days";
  if (diffDays <= 180) return "In last 180 days";
  if (diffDays <= 365) return "In last 365 days";
  return dateString.split("T")[0];  
}

const VideosTable = ({ videosData }) => {
  return (
    <div className="p-5">
      <div className="overflow-x-auto">
        <table className="table-auto w-full rounded-lg shadow-lg text-center dark:bg-gray-800 dark:text-gray-200">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th className="px-2 py-1 md:px-4 md:py-2">Thumbnail</th>
              <th className="px-2 py-1 md:px-4 md:py-2">Title</th>
              <th className="px-2 py-1 md:px-4 md:py-2">Total Ad Spend</th>
              <th className="px-2 py-1 md:px-4 md:py-2">Ad Spend In Last 30 Days</th>
              <th className="px-2 py-1 md:px-4 md:py-2">Publish Date</th>
              <th className="px-2 py-1 md:px-4 md:py-2">Duration</th>
            </tr>
          </thead>
          <tbody>
            {videosData.results.map((video, index) => (
              <tr key={index} className="text-sm md:text-base border dark:border-gray-700">
                <td className="px-2 py-1 md:px-4 md:py-2">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="rounded-full w-16 h-16 object-cover"
                  />
                </td>
                <td className="font-semibold px-2 py-1 md:px-4 md:py-2">
                  {video.title}
                </td>
                <td className="px-2 py-1 md:px-4 md:py-2">
                  ${video.totalSpend ? addCommasToNumber(video.totalSpend) : 0}
                </td>
                <td className="px-2 py-1 md:px-4 md:py-2">
                  ${video.last30Days ? addCommasToNumber(video.last30Days) : 0}
                </td>
                <td className="px-2 py-1 md:px-4 md:py-2">
                  {getRelativeTimeSpan(video.publishedAt)}
                </td>
                <td className="px-2 py-1 md:px-4 md:py-2">
                  {formatTime(video.duration)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-center p-2 space-x-4">
        <button
          className="shadow px-3 border py-2 bg-gray-100 dark:bg-gray-700 dark:text-gray-200 rounded-lg"
          disabled={videosData.page === 1}
        >
          <IoArrowBackOutline />
        </button>
        <span className="mx-2">{videosData.page}</span>
        <button
          className="shadow border px-3 py-2 bg-gray-100 dark:bg-gray-700 dark:text-gray-200 rounded-lg"
          disabled={!videosData.hasMore}
        >
          <IoArrowForwardOutline />
        </button>
      </div>
    </div>
  );
};

export default VideosTable;
