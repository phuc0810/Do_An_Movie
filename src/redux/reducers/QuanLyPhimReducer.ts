import {
  PHIM_DANG_CHIEU,
  PHIM_SAP_CHIEU,
  SET_DANH_SACH_PHIM,
} from "../actions/types/QuanLyPhimType";

const stateDefault: stateDf = {
  arrFilm: [],
  dangChieu: false,
  sapChieu: false,
  stateArrFilmDf: [],
};

type stateDf = {
  arrFilm: arrFilm[];
  dangChieu: boolean;
  sapChieu: boolean;
  stateArrFilmDf: arrFilm[];
};

export const QuanLyPhimReducer = (state = stateDefault, action: any) => {
  switch (action.type) {
    case SET_DANH_SACH_PHIM: {
      state.arrFilm = action.arrFilm;
      state.stateArrFilmDf = action.arrFilm;
      return { ...state };
    }
    case PHIM_DANG_CHIEU: {
      state.dangChieu = !state.dangChieu;
      state.arrFilm = state.stateArrFilmDf.filter(
        (phim) => phim.dangChieu === state.dangChieu
      );
      return { ...state };
    }
    case PHIM_SAP_CHIEU: {
      state.sapChieu = !state.sapChieu;

      state.arrFilm = state.stateArrFilmDf.filter(
        (phim) => phim.sapChieu === state.sapChieu
      );
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
