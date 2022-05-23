import { http } from "util/settings/config";

export class QuanLyRapService {
  LayThongTinLichChieuHeThongRap = () => {
    return http.get("api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP13");
  };
  LayThongTinLichChieuPhim = (id: string | undefined) => {
    return http.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`);
  };
}

export const quanLyRapService = new QuanLyRapService();
