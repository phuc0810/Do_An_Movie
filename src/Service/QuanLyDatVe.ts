import { http } from "util/settings/config";

export class QuanLyDatVe {
  layChiTietPhongVe = (maLichChieu: string) => {
    return http.get(
      `/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
    );
  };
}

export const quanLyDatVeService = new QuanLyDatVe();
