import React from "react";

const Campaigns = ({ companyData }) => {
  const flags = ["🇺🇸", "🇨🇳", "🇮🇳", "🇧🇷", "🇷🇺"];
  return (
    <div className="border p-3  rounded-lg w-full m-7 md:w-1/4 shadow dark:border-gray-700 dark:bg-gray-800">
      <h1 className="text-xl font-bold border-b-2 pb-2 text-center">
        Campaigns per Country  
        <p>({companyData.data.brand.name})</p>
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
  );
};

export default Campaigns;
