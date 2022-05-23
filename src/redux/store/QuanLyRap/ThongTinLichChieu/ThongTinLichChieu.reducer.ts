import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ArrChiTietPhim, ArrLichChieu } from "@types";

interface typeInitialState {
  ArrLichChieu?: ArrLichChieu[];
  ArrChiTietPhim?: ArrChiTietPhim[];
}

const initialState: typeInitialState = {};

export const { reducer: infoLichChieuReducer, actions: infoLichChieuAction } =
  createSlice({
    name: "infoLichChieu",
    initialState,
    reducers: {
      setDSLichChieu: (state, action: PayloadAction<ArrLichChieu[]>) => {
        state.ArrLichChieu = action.payload;
      },
      setChiTietPhim: (state, action: PayloadAction<ArrChiTietPhim[]>) => {
        state.ArrChiTietPhim = action.payload;
      },
    },
  });
