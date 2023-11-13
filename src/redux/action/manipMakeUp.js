import { createSlice } from "@reduxjs/toolkit";

export const manipMakeUp = createSlice({
  name: "MakeUp",
  initialState: {
    totalMakeUp: 10,
    namaBrand: "Lato-lato",
    penerbit: "Sari Roti",
    listBedak: ["Bedak Tabur", "Bedak Foundation", "Bedak halus"],
  },
  reducers: {
    kurangMakeUp: (state) => {
      state.totalMakeUp = state.totalMakeUp - 1;
    },
    tambahMakeUp: (state) => {
      state.totalMakeUp = state.totalMakeUp + 1;
    },

    dinamisFunction: (state, action) => {
      state.namaBrand = action.payload.namaBrand;
      state.penerbit = action.payload.penerbit;
    },
    deleteList: (state) => {
      state.listBedak.pop();
    },
    addList: (state, action) => {
      const add = action.payload;
      state.listBedak.push(add);
    },
  },
});

export const { tambahMakeUp, kurangMakeUp, dinamisFunction, deleteList, addList } = manipMakeUp.actions;

export default manipMakeUp.reducer;
