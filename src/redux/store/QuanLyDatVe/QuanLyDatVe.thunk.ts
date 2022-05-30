import { createAsyncThunk } from "@reduxjs/toolkit";
import { thongTinDatVe } from "@types";
import { quanLyDatVeService } from "Service/QuanLyDatVeService";
import { quanLyDatVeAction } from "./QuanLyDatVe.reducer";

// noi de goi api

export const getChiTietPhongVe = createAsyncThunk(
  "QuanLyDatVe/getChiTietPhongVe",
  async (maLichChieu: string, { dispatch }) => {
    try {
      const result = await quanLyDatVeService.layChiTietPhongVe(maLichChieu);
      dispatch(quanLyDatVeAction.setChiTietPhongVe(result.data.content));
    } catch (error) {
      console.log(error);
    }
  }
);

export const datVe = createAsyncThunk(
  "QuanLyDatVe/datVe",
  async (thongTinDatVe: thongTinDatVe, { dispatch }) => {
    try {
      const result = await quanLyDatVeService.datVe(thongTinDatVe);
      dispatch(quanLyDatVeAction.setThongTinDatVe(result.data.content));
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
);
