import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChiTietPhongVe } from "@types";

interface typeInitialState {
  chiTietPhongVe?: ChiTietPhongVe;
}

const initialState: typeInitialState = {};

export const { reducer: quanLyDatVeReducer, actions: quanLyDatVeAction } =
  createSlice({
    name: "QuanLyDatVe",
    initialState,
    reducers: {
      setChiTietPhongVe: (
        state,
        action: PayloadAction<ChiTietPhongVe | undefined>
      ) => {
        state.chiTietPhongVe = action.payload;
      },
    },
  });
