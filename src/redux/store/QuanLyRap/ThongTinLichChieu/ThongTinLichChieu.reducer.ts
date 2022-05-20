import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ArrLichChieu } from "@types";

interface typeInitialState {
  ArrLichChieu?: ArrLichChieu[];
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
    },
  });
