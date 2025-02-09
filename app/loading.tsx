
"use client";
import React from "react";


import { HashLoader } from "react-spinners";

const loading = () => {
  return ( 
    <div className="flex justify-center items-center h-screen">
      <HashLoader size={80} color="#2B71F0" />
    </div>
  );
};

export default loading;