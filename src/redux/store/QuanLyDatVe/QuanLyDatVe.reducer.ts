import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChiTietPhongVe, ghe, thongTinDatVe } from "@types";

interface typeInitialState {
  chiTietPhongVe?: ChiTietPhongVe;
  danhSachGheDangDat: ghe[];
  thongTinDatVe: thongTinDatVe;
}

const initialState: typeInitialState = {
  danhSachGheDangDat: [],
  thongTinDatVe: {
    maLichChieu: 0,
    danhSachVe: [],
  },
};

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
      setDSGheDat: (state, action: PayloadAction<ghe>) => {
        console.log(action.payload);
        let newArrDD = [...state.danhSachGheDangDat];
        let index = newArrDD.findIndex(
          (gheDD) => gheDD.maGhe === action.payload.maGhe
        );
        if (index != -1) {
          newArrDD.splice(index, 1);
        } else {
          newArrDD.push(action.payload);
        }
        state.danhSachGheDangDat = newArrDD;
        console.log("state.danhSachGheDangDat", state.danhSachGheDangDat);
        return state;
      },
      setThongTinDatVe: (state, action: PayloadAction<thongTinDatVe>) => {
        state.thongTinDatVe = action.payload;
        console.log("thongTinDatVeReducer", state.thongTinDatVe);
      },
    },
  });
