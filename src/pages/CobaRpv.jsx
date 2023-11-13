import React from "react";

export const CobaRpv = () => {
  return (
    <div className="p-4 flex flex-col gap-4 w-full h-screen">
      <div className="flex justify-end tablet:justify-center w-full h-1/6 ">
        <div className="bg-red-600 w-1/3 tablet:w-full h-full flex justify-center items-center">
          <span className="text-white font-semibold">Merah</span>
        </div>
      </div>
      <div className="flex flex-col web:flex-row gap-4 w-full h-5/6">
        <div className="justify-center items-center h-full w-1/3 bg-purple-600 hidden web:flex">
          <span className="text-white font-semibold">Ungu</span>
        </div>
        <div className="flex flex-col gap-4 tablet:flex-col-reverse w-full h-full">
          <div className="flex justify-center items-center h-2/6  w-full bg-purple-600 web:hidden">
            <span className="text-white font-semibold">Ungu</span>
          </div>
          <div className="flex justify-between tablet:flex-row-reverse gap-4 items-center h-2/6 web:h-3/6 w-full">
            <div className="flex justify-center items-center h-full w-full bg-[#EB38AE]">
              <span className="text-white font-semibold">Pink</span>
            </div>
            <div className="flex justify-center items-center h-full w-full bg-[#38C0EB] tablet:bg-[#EB38AE] web:bg-[#38C0EB]">
              <span className="text-white font-semibold">Biru</span>
            </div>
          </div>
          <div className="flex justify-center items-center h-2/6 web:h-3/6 w-full bg-green-600">
            <span className="text-white font-semibold">Hijau</span>
          </div>
        </div>
      </div>
    </div>
  );
};
