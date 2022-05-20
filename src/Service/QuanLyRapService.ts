import { http } from "util/settings/config";

export class QuanLyRapService {
  LayThongTinLichChieuHeThongRap = () => {
    return http.get("api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP13");
  };
}

export const quanLyRapService = new QuanLyRapService();
