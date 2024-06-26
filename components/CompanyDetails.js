import React from "react";
import { FaRegStar } from "react-icons/fa6";
import { IoMdShare } from "react-icons/io";
import { GoQuestion } from "react-icons/go";
import { addCommasToNumber, formatTime } from "./VideosTable";
import DarkModeToggle from "./DarkModeToggle";

const CompanyDetails = ({ companyData }) => {
  // console.log(companyData);
  const flags = ["🇺🇸", "🇨🇳", "🇮🇳", "🇧🇷", "🇷🇺"];
  return (
    <main className="dark:bg-dark-background dark:text-dark-text">
      <div className="flex flex-col items-center justify-center p-5 bg-slate-200 dark:bg-gray-800 w-full  md:space-x-2">
        <div className="flex space-x-3   justify-center items-center">
          <img
            className="rounded-full w-[50px]"
            src={companyData.data.brand.thumbnail}
          />
          <h1 className="text-3xl font-bold">{companyData.data.brand.name}</h1>
        </div>
        <div className="flex space-x-2 mt-4  mb-2">
          <button className="flex items-center space-x-2 px-2 py-1 shadow rounded bg-white dark:bg-gray-700 dark:text-gray-200 text-black">
            <FaRegStar />
            Swipe
          </button>
          <button className="flex items-center space-x-2 px-2 py-1 shadow rounded bg-blue-500 text-white">
            <IoMdShare />
            Share
          </button>
          <DarkModeToggle />
        </div>
        <p className="m-3 text-center">{companyData.data.brand.description}</p>
      </div>

      <div className="flex flex-col items-center justify-around p-5 md:flex-row">
        {/* <div className="border p-3 rounded-lg w-full md:w-1/4 shadow dark:border-gray-700 dark:bg-gray-800">
          <h1 className="text-xl font-bold border-b-2 pb-2">Company Info</h1>
          <div className="flex flex-col justify-center items-start mt-2">
            <p className="space-x-2">
              <span className="font-bold">Company:</span>{" "}
              {companyData.data.company.legalName}
            </p>
            <p className="space-x-2">
              <span className="font-bold">Year Founded</span>:{" "}
              {companyData.data.company.yearFounded}
            </p>
            <p className="space-x-2">
              <span className="font-bold">Employees:</span>{" "}
              {companyData.data.company.numberOfEmployees}
            </p>
            <p className="space-x-2">
              <span className="font-bold">HQ:</span>{" "}
              {companyData.data.company.headquarters}
            </p>
            <p className="space-x-2">
              <span className="font-bold">Category:</span> Online Video
            </p>
          </div>
        </div> */}
        <div className="flex flex-col w-full md:w-1/4 m-3">
          <div className="border p-3 rounded-lg mb-3 md:m-2 shadow dark:border-gray-700 dark:bg-gray-800">
            <h1 className="flex items-center justify-start">
              Duration <GoQuestion />
            </h1>
            <p className="font-bold">
              {formatTime(companyData.data.brand.averageVideoDuration)}
            </p>
          </div>
          <div className="border p-3 rounded-lg md:m-2 shadow dark:border-gray-700 dark:bg-gray-800">
            <h1 className="flex items-center justify-start">
              Creative Count <GoQuestion />
            </h1>
            <p className="font-bold">#{companyData.data.creativeCount}</p>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-1/4 m-3">
          <div className="border p-3 rounded-lg mb-3 md:m-2 shadow dark:border-gray-700 dark:bg-gray-800">
            <h1 className="flex items-center justify-start">
              Ad spend 365 <GoQuestion />
            </h1>
            <p className="font-bold">
              ${addCommasToNumber(companyData.data.brand.spend.today)}
            </p>
          </div>
          <div className="border p-3 rounded-lg md:m-2 shadow dark:border-gray-700 dark:bg-gray-800">
            <h1 className="flex items-center justify-start">
              Global rank <GoQuestion />
            </h1>
            <p className="font-bold">#{companyData.data.ranks.global.rank}</p>
          </div>
        </div>
        <div className="flex flex-col w-full m-3 md:w-1/4 ">
          <div className="border p-3 rounded-lg w-full mb-3 md:m-2 shadow dark:border-gray-700 dark:bg-gray-800">
            <h1 className="flex items-center justify-start">
              Country rank <GoQuestion />
            </h1>
            <p className="font-bold">#{companyData.data.ranks.country.rank}</p>
          </div>
          <div className="border p-3 rounded-lg w-full md:m-2 shadow dark:border-gray-700 dark:bg-gray-800">
            <h1 className="flex items-center justify-start">
              Category rank <GoQuestion />
            </h1>
            <p className="font-bold">#{companyData.data.ranks.category.rank}</p>
          </div>
        </div>
        <div className="border p-3 rounded-lg w-full m-3 md:w-1/4 shadow dark:border-gray-700 dark:bg-gray-800">
          <h1 className="text-xl font-bold border-b-2 pb-2">
            Campaigns per Country
          </h1>
          <div className="flex flex-col mt-2 justify-center">
            {companyData.data.top5Countries.map((country, i) => {
              return (
                <div className="flex space-x-3" key={i}>
                  <h2> {flags[i]}:</h2>
                  <p>{country.count}</p>
                  <p>({country.percentage.toString().split(".")[0]}%)</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CompanyDetails;
