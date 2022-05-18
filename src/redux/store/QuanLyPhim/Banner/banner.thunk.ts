import { createAsyncThunk } from "@reduxjs/toolkit";
import { http } from "util/settings/config";
import { bannerAction } from "./banner.reducer";

export const getBanner = createAsyncThunk(
  "Banner/getBanner",
  async (params, { dispatch }) => {
    try {
      const result = await http.get("/api/QuanLyPhim/LayDanhSachBanner");
      console.log(result);
      dispatch(bannerAction.setBanner(result.data.content));
    } catch (error) {
      console.log(error);
    }
  }
);
