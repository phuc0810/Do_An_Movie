import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyPhimService } from "Service/QuanLyPhimService";
import { http } from "util/settings/config";
import { dsPhimAction } from "./dsPhim.reducer";

export const getDanhSachPhim = createAsyncThunk(
  "DanhSachPhim/getDanhSachPhim",
  async (params, { dispatch }) => {
    try {
      const result = await quanLyPhimService.LayDanhSachPhim();
      console.log(result);
      dispatch(dsPhimAction.setDanhSachPhim(result.data.content));
    } catch (error) {
      console.log(error);
    }
  }
);
