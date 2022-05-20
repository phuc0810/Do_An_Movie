import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyRapService } from "Service/QuanLyRapService";
import { http } from "util/settings/config";
import { infoLichChieuAction } from "./ThongTinLichChieu.reducer";

export const getInfoLichChieu = createAsyncThunk(
  "ThongTinLichChieu/getInfoLichChieu",
  async (params, { dispatch }) => {
    try {
      const result = await quanLyRapService.LayThongTinLichChieuHeThongRap();
      dispatch(infoLichChieuAction.setDSLichChieu(result.data.content));
    } catch (error) {
      console.log(error);
    }
  }
);
