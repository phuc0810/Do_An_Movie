import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyDatVeService } from "Service/QuanLyDatVe";
import { quanLyDatVeAction } from "./QuanLyDatVe.reducer";

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
