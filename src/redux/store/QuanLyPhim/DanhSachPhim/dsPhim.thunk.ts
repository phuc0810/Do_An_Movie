import { createAsyncThunk } from "@reduxjs/toolkit";
import { http } from "util/settings/config";
import { dsPhimAction } from "./dsPhim.reducer";

export const getDanhSachPhim = createAsyncThunk(
  "DanhSachPhim/getDanhSachPhim",
  async (params, { dispatch }) => {
    try {
      const result = await http.get(
        "/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP13"
      );
      console.log(result);
      dispatch(dsPhimAction.setDanhSachPhim(result.data.content));
    } catch (error) {
      console.log(error);
    }
  }
);
