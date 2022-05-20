import { http } from "util/settings/config";

export class QuanLyPhimService {
  layDanhSachBanner = () => {
    return http.get("/api/QuanLyPhim/LayDanhSachBanner");
  };
  LayDanhSachPhim = () => {
    return http.get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP13");
  };
}

export const quanLyPhimService = new QuanLyPhimService();
