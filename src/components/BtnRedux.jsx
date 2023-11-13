import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addList, deleteList, dinamisFunction, kurangMakeUp, tambahMakeUp } from "../redux/action/manipMakeUp";

export const BtnRedux = () => {
  const [Bedak, setBedak] = useState();
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col items-start justify-start">
      <div className="flex justify-center gap-2">
        Ganti Nama Brand :
        <input
          type="text"
          className="border"
          onChange={(e) => {
            dispatch(
              dinamisFunction({
                namaBrand: e.target.value,
                penerbit: "Sedang di cari....",
              })
            );
          }}
        ></input>
      </div>
      <div className="flex gap-4 mt-[5px]">
        Tambah List:
        <input
          onChange={(e) => {
            setBedak(e.target.value);
          }}
        ></input>
        <button
          className="bg-[#fcba03] rounded w-[80px]"
          onClick={() => {
            dispatch(addList(Bedak));
          }}
        >
          Add
        </button>
      </div>
      <div className="flex gap-4 mt-[5px]">
        Edit Jumlah:
        <button
          className="bg-[#fcba03] rounded w-[60px]"
          onClick={() => {
            dispatch(tambahMakeUp());
          }}
        >
          Add
        </button>
        <button
          className="bg-[#fcba03] rounded w-[80px]"
          onClick={() => {
            dispatch(kurangMakeUp());
          }}
        >
          Subtract
        </button>
      </div>
      <div className="flex gap-4 mt-[5px]">
        Hapus List:
        <button
          className="bg-[#fcba03] rounded w-[80px]"
          onClick={() => {
            dispatch(deleteList());
          }}
        >
          Delete
        </button>
        <br />
      </div>
    </div>
  );
};
