export interface ArrLichChieu {
  logo: string;
  maHeThongRap: string;
  mahom: string;
  tenHeThongRap: string;
  lstCumRap?: lstCumRap[];
}
export interface lstCumRap {
  danhSachPhim: danhSachPhim[];
  diaChi: string;
  hinhAnh: string;
  maCumRap: string;
  tenCumRap: string;
}
export interface danhSachPhim {
  dangChieu: boolean;
  hinhAnh: string;
  hot: boolean;
  lstLichChieuTheoPhim: lstLichChieuTheoPhim[];
  maPhim: number;
  sapChieu: boolean;
  tenPhim: string;
}
export interface lstLichChieuTheoPhim {
  giaVe: number;
  maLichChieu: number;
  maRap: string;
  ngayChieuGioChieu: string;
  tenRap: string;
}
