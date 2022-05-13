import { SET_DANH_SACH_PHIM } from "../actions/types/QuanLyPhimType";

const stateDefault: stateDf = {
  arrFilm: [],
};

type stateDf = {
  arrFilm: arrFilm[];
};

export const QuanLyPhimReducer = (state = stateDefault, action: any) => {
  switch (action.type) {
    case SET_DANH_SACH_PHIM: {
      state.arrFilm = action.arrFilm;
      return { ...state };
    }
    default:
      return state;
  }
};

interface arrFilm {
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
