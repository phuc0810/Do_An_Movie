export interface imgBanner {
  maBanner: number;
  maPhim: number;
  hinhAnh: string;
}
export interface arrFilm {
  maPhim: number;
  tenPhim: string;
  biDanh: string;
  trailer: string;
  hinhAnh: string;
  moTa: string;
  maNhom: string;
  ngayKhoiChieu: string;
  danhGia: number;
  hot: boolean;
  dangChieu: boolean;
  sapChieu: boolean;
}

export interface formData {
  tenPhim: string;
  trailer: string;
  moTa: string;
  ngayKhoiChieu: string;
  dangChieu: boolean;
  sapChieu: boolean;
  hot: boolean;
  danhGia: number;
  hinhAnh: {};
}
