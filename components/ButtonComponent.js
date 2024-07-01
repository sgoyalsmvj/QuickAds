import Image from "next/image";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5"; // Make sure to install react-icons
import logo1 from "@/public/images/spend.png";
import logo2 from "@/public/images/analytics.png";
import logo3 from "@/public/images/executive.png";
import logo4 from "@/public/images/strategy.png";
import arrow from '@/public/images/Arrow.png';
const CustomButton = ({ href, title, description, logo, alt }) => {
  return (
    <Link href={href}>
      <div className="relative h-52 md:w-96 px-6 py-4 w-full max-w-xs bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl shadow-md transition-transform transform hover:scale-105 cursor-pointer">
        <div className="flex flex-col justify-between h-full text-white">
          <div>
            <h2 className="text-lg font-bold">{title}</h2>
            <p className="mt-2 text-sm">{description}</p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <Image src={arrow} width={52} />
            <div className="flex items-center space-x-2">
              <div className="w-16 h-16 flex justify-end items-center">
                <Image src={logo} alt={alt} width={48} height={48} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

const ButtonContainer = () => {
  return (
    <div className="flex flex-col md:flex-row  w-full items-center justify-around mb-5 mt-7 space-y-5 md:space-y-0 md:space-x-5">
      <CustomButton
        href="/summary"
        title="Executive Summary"
        description="Summary for the CEO"
        logo={logo4}
        alt="Strategy Logo"
      />
      <CustomButton
        href="/adSpend"
        title="Ad Spend & Effectiveness"
        description="Analyze and optimize your ad spend."
        logo={logo1}
        alt="Ad Spend Logo"
      />
      <CustomButton
        href="/swot"
        title="Competitor Video Analytics"
        description="Get insights into your competitors' video strategies."
        logo={logo2}
        alt="Analytics Logo"
      />
    </div>
  );
};

export default ButtonContainer;
