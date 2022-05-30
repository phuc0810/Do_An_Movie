import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThongTinDangNhap } from "@types";
import { quanLyNguoiDungService } from "Service/QuanLyNguoiDungService";
import { quanLyPhimService } from "Service/QuanLyPhimService";
import { http } from "util/settings/config";
import { quanLyNguoiDungAction } from "./QuanLyNguoiDung.reducer";
// import { bannerAction } from "./banner.reducer";

export const getDangNhap = createAsyncThunk(
  "QuanLyNguoiDung/getDangNhap",
  async (values: { taiKhoan: string; matKhau: string }, { dispatch }) => {
    try {
      const result = await quanLyNguoiDungService.DangNhap(values);
      console.log(result);
      dispatch(quanLyNguoiDungAction.setThongTinDangNhap(result.data.content));
    } catch (error) {
      console.log(error);
    }
  }
);
export const layThongTinNguoiDung = createAsyncThunk(
  "QuanLyNguoiDung,layThongTinNguoiDung",
  async (params, { dispatch }) => {
    try {
      const result = await quanLyNguoiDungService.layThongTinNguoiDung();
      dispatch(quanLyNguoiDungAction.setThongTinNguoiDung(result.data.content));
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
);
