import React from "react";
import CountryDetails from "@/app/components/CountryDetails";
import { CountriesDetailProps } from "../../../../types/types";
const CountriesName = ({ params }: { params: { countries_name: string } }) => {
  const countryDetails: CountriesDetailProps[] = [
    {
      name: "Pakistan",
      population: 251269164,
      capital: "Islamabad",
    },
    {
      name: "canada",
      population: 38000000,
      capital: "Ottawa",
    },
    {
      name: "India",
      population: 139409038,
      capital: "New Delhi",
    },
    {
      name: "Germany",
      population: 83100000,
      capital: "Berlin",
    },
    {
      name: "Australia",
      population: 25687041,
      capital: "Canberra",
    },
  ];
  const countries = countryDetails.find(
    (country) =>
      country.name.toLowerCase() === params.countries_name.toLowerCase()
  );

  if (!countries) {
    return <h1>Country Not Found!</h1>;
  }
  return (
    <>
      <div className="">
        <CountryDetails
          name={countries.name}
          population={countries.population}
          capital={countries.capital}
        />
      </div>
    </>
  );
};

export default CountriesName;
