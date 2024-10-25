import React from "react";
import Button from "./components/Button";
const Home = () => {
  return (
    <>
      <div className=" bg-purple-100 min-h-screen flex flex-col justify-center items-center pb-12">
        <h1 className="font-bold text-center px-4 mb-0 mx-4 text-5xl text-gray-700 p-6 shadow-xl">
          <i> Hey Lets create application with </i>
          <span className="text-purple-700">
            <br />
            <i> Dynamic Routs</i>
          </span>
        </h1>
        <Button />
      </div>
    </>
  );
};

export default Home;
