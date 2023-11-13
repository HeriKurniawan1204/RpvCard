import React from "react";
import { Coba } from "../components/Coba";
import { BtnRedux } from "../components/BtnRedux";

export const Render = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
      <div className="w-full max-w-md bg-white bg-opacity-10 p-6 rounded-lg backdrop-filter backdrop-blur-lg shadow-lg">
        <div className="flex flex-col items-center justify-start mb-[15px]">
          <Coba />
        </div>
        <div className="flex flex-col items-start justify-start">
          <BtnRedux />
        </div>
      </div>
    </div>
  );
};
