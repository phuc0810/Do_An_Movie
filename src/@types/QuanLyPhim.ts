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

export interface index {
  mang: mang[];
}
interface mang {
  ten: string;
  sdt: string;
  mang2: mang2[];
}
interface mang2 {
  
}
