import { CountriesDetailProps } from "../../../types/types";
import Link from "next/link";
const CountryDetail: React.FC<CountriesDetailProps> = ({
  name,
  population,
  capital,
}) => {
  return (
    <div className="text-center pt-28 text-2xl min-h-screen bg-purple-50 ">
      <div className="">
        <h1 className="font-semibold text-purple-900 italic text-3xl pb-6">
          Countries Details!
        </h1>
        <div className="flex justify-center">
          <div className=" border-purple-200 hover:scale-105 transition-all cursor-pointer rounded-3xl p-10 shadow-xl shadow-gray-200 bg-gradient-to-tl from-purple-200 to-purple-300 ">
            <span className=" text-purple-600">
              <span className="font-semibold text-purple-800 pr-4">Name:</span>
              {name}
            </span>
            <br />
            <span className=" text-purple-600">
              <span className="font-semibold text-purple-800 pr-4 ">
                Population:
              </span>
              {population}
            </span>
            <br />
            <span className=" text-purple-600">
              <span className="font-semibold text-purple-800 pr-4">
                Capital:
              </span>
              {capital}
            </span>
          </div>
        </div>
        <div className="text-white text-center text-xl p-4">
          <button className="text-lg text-center mt-4 px-4 mx-4 p-1 rounded-xl border-2 bg-purple-700 text-white hover:scale-105 transition-all duration-300 hover:bg-white hover:text-purple-700 hover:font-bold font-bold">
            <Link
              href="/countries"
              className="flex items-center justify-center"
            >
              Back to the List
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
