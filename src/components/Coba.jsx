import React from "react";
import { useSelector } from "react-redux";
import { BtnRedux } from "./BtnRedux";

export const Coba = () => {
  const data = useSelector((state) => state.MakeUp);
  console.log(data, "data");

  // const renderList = () => {
  //   return data.listBedak.map((value, index) => {
  //     <div key={index}>~ {value}</div>;
  //   });
  // };

  return (
    <>
      <div className="flex flex-col items-start justify-start">
        <h1>View Redux</h1>
        <div>Total MakeUp: {data.totalMakeUp}</div>
        <div>Total MakeUp: {data.namaBrand}</div>
        <div>Total MakeUp: {data.penerbit}</div>
        <div>
          List Makeup :
          {data.listBedak.map((value, index) => (
            <div key={index}>~ {value}</div>
          ))}
        </div>
      </div>
    </>
  );
};
