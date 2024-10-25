import Link from "next/link";
import React from "react";

const Button = () => {
  return (
    <>
      <button className="text-lg text-center mt-4 px-4 mx-4 p-1 rounded-xl border-2 bg-purple-700 text-white hover:scale-105 transition-all duration-300 hover:bg-white hover:text-purple-700 hover:font-bold font-bold">
        <Link href="/countries">Click Here</Link>
      </button>
    </>
  );
};

export default Button;
