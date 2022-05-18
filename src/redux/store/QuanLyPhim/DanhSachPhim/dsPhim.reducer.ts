import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { arrFilm } from "@types";

interface typeInitialState {
  arrFilm?: arrFilm[];
  sapChieu: boolean;
  dangChieu: boolean;
}

const initialState: typeInitialState = {
  sapChieu: false,
  dangChieu: false,
};

export const { reducer: dsPhimReducer, actions: dsPhimAction } = createSlice({
  name: "danhSachPhim",
  initialState,
  reducers: {
    setDanhSachPhim: (state, action: PayloadAction<arrFilm[]>) => {
      state.arrFilm = action.payload;
    },
    changeSapChieu: (state, action: PayloadAction<boolean>) => {
      state.sapChieu = action.payload;
      state.dangChieu = false;
      state.arrFilm = state.arrFilm?.filter((phim) => phim.sapChieu === true);
      return state;
    },
    changeDangChieu: (state, action: PayloadAction<boolean>) => {
      state.dangChieu = action.payload;
      state.sapChieu = false;
      state.arrFilm = state.arrFilm?.filter((phim) => phim.dangChieu === true);
      return state;
    },
  },
});
