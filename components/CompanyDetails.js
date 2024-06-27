import React, { useState } from "react";
import { FaRegStar } from "react-icons/fa6";
import { IoMdShare } from "react-icons/io";
import { GoQuestion } from "react-icons/go";
import { addCommasToNumber, formatTime } from "./VideosTable";
import DarkModeToggle from "./DarkModeToggle";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";

const CompanyDetails = ({ companyData }) => {
  // console.log(companyData);
  const flags = ["🇺🇸", "🇨🇳", "🇮🇳", "🇧🇷", "🇷🇺"];
  const [viewmore, setViewmore] = useState(false);

  function handleViewmore() {
    setViewmore(!viewmore);
  }

  return (
    <main className="dark:bg-dark-background dark:text-dark-text">
      <div className="flex flex-col items-center justify-center p-5 bg-slate-200 dark:bg-gray-800 w-full  md:space-x-2">
        <div className="flex space-x-3   justify-center items-center">
          <img
            className="rounded-full w-[50px]"
            src={companyData.data.brand.thumbnail}
            alt={companyData.data.brand.name}
          />
          <h1 className="text-3xl font-bold">{companyData.data.brand.name}</h1>
        </div>

        <p className="mt-3 mx-3 text-center flex items-center justify-center">
          {companyData.data.brand.description.split(".")[0]}
          <button className="mx-2 text-sm text-slate-500" onClick={handleViewmore}>
            {viewmore ? "View Less" : " View More"}
          </button>
        </p>
        {viewmore && (
          <div className="flex flex-col text-center">
            {companyData.data.brand.description.split(".").slice(1)}
            <br />
          </div>
        )}
      </div>

      <div className="flex flex-col items-center justify-around p-5 md:flex-row">
        <div className="flex flex-col w-full md:w-1/4 m-3">
          <div className="border p-3 rounded-lg mb-3 md:m-2 shadow dark:border-gray-700 dark:bg-gray-800">
            <h1 className="flex items-center justify-start">
              Average Duration <GoQuestion />
            </h1>
            <p className="font-bold">
              {formatTime(companyData.data.brand.averageVideoDuration)}
            </p>
          </div>
          <div className="border p-3 rounded-lg md:m-2 shadow dark:border-gray-700 dark:bg-gray-800">
            <h1 className="flex items-center justify-start">
              Total Creative Count <GoQuestion />
            </h1>
            <p className="font-bold">{companyData.data.creativeCount}</p>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-1/4 m-3">
          <div className="border p-3 rounded-lg mb-3 md:m-2 shadow dark:border-gray-700 dark:bg-gray-800">
            <h1 className="flex items-center justify-start">
              Ad spend In Last Year <GoQuestion />
            </h1>
            <p className="font-bold">
              ${addCommasToNumber(companyData.data.brand.spend.today)}
            </p>
          </div>
          <div className="border p-3 rounded-lg md:m-2 shadow dark:border-gray-700 dark:bg-gray-800">
            <h1 className="flex items-center justify-start">
              Global rank <GoQuestion />
            </h1>
            <p className="font-bold">
              #{companyData.data.ranks.global.rank}{" "}
              <span className={companyData.data.ranks.global.change >= 0 ? "text-green-500" : "text-red-500"}>
                {companyData.data.ranks.global.change >= 0 ? (
                  <IoMdArrowDropup className="inline" />
                ) : (
                  <IoMdArrowDropdown className="inline" />
                )}
                {Math.abs(companyData.data.ranks.global.change)}
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full m-3 md:w-1/4 ">
          <div className="border p-3 rounded-lg w-full mb-3 md:m-2 shadow dark:border-gray-700 dark:bg-gray-800">
            <h1 className="flex items-center justify-start">
              Country rank <GoQuestion />
            </h1>
            <p className="font-bold">
              #{companyData.data.ranks.country.rank}{" "}
              <span className={companyData.data.ranks.country.change >= 0 ? "text-green-500" : "text-red-500"}>
                {companyData.data.ranks.country.change >= 0 ? (
                  <IoMdArrowDropup className="inline" />
                ) : (
                  <IoMdArrowDropdown className="inline" />
                )}
                {Math.abs(companyData.data.ranks.country.change)}
              </span>
            </p>
          </div>
          <div className="border p-3 rounded-lg w-full md:m-2 shadow dark:border-gray-700 dark:bg-gray-800">
            <h1 className="flex items-center justify-start">
              Category rank <GoQuestion />
            </h1>
            <p className="font-bold">
              #{companyData.data.ranks.category.rank}{" "}
              <span className={companyData.data.ranks.category.change >= 0 ? "text-green-500" : "text-red-500"}>
                {companyData.data.ranks.category.change >= 0 ? (
                  <IoMdArrowDropup className="inline" />
                ) : (
                  <IoMdArrowDropdown className="inline" />
                )}
                {Math.abs(companyData.data.ranks.category.change)}
              </span>
            </p>
          </div>
        </div>
        <div className="border p-3 rounded-lg w-full m-3 md:w-1/4 shadow dark:border-gray-700 dark:bg-gray-800">
          <h1 className="text-xl font-bold border-b-2 pb-2">
            Campaigns per Country
          </h1>
          <div className="flex flex-col mt-2  md:h-[95px] overflow-y-auto">
            {companyData.data.top5Countries.map((country, i) => (
              <div className="flex space-x-3" key={i}>
                <h2> {flags[i]}:</h2>
                <p>{country.count}</p>
                <p>({country.percentage.toString().split(".")[0]}%)</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CompanyDetails;
