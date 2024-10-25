import React from "react";
import Link from "next/link";
const country = () => {
  return (
    <>
      <div className="bg-purple-100 min-h-screen text-center pt-10">
        <h3 className="text-purple-700 text-3xl italic font-semibold underline mb-6">
          List of Countries
        </h3>
        <div className="flex flex-col items-center">
          <ul className="list-disc text-lg font-semibold italic pl-10 sm:pl-0 sm:text-black md:text-black">
            <li className="text-gray-900 sm:text-black md:text-black hover:text-purple-700 hover:font-semibold cursor-pointer hover:scale-105 transition-all mb-2">
              <Link href="/countries/pakistan">Pakistan</Link>
            </li>
            <li className=" text-gray-900 sm:text-black md:text-black hover:text-purple-700 hover:font-semibold cursor-pointer hover:scale-105 transition-all mb-2">
              <Link href="/countries/canada">Canada</Link>
            </li>
            <li className=" text-gray-900 sm:text-black md:text-black hover:text-purple-700 hover:font-semibold cursor-pointer hover:scale-105 transition-all mb-2">
              <Link href="/countries/india">India</Link>
            </li>
            <li className=" text-gray-900 sm:text-black md:text-black hover:text-purple-700 hover:font-semibold cursor-pointer hover:scale-105 transition-all mb-2">
              <Link href="/countries/germany">Germany</Link>
            </li>
            <li className=" text-gray-900 sm:text-black md:text-black hover:text-purple-700 hover:font-semibold cursor-pointer hover:scale-105 transition-all mb-2">
              <Link href="/countries/australia">Australia</Link>
            </li>
          </ul>
          <button className="text-lg mt-3 px-8 py-2 ml-5 rounded-xl border-2 bg-purple-700 text-white hover:scale-105 transition-all duration-300 hover:bg-white hover:text-purple-700 hover:font-bold font-bold">
            <Link href="/">Back</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default country;
