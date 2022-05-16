import { http } from "../../util/settings/config";
import { ThunkAction } from "../configStore";
import { SET_DANH_SACH_PHIM } from "./types/QuanLyPhimType";

export const getDanhSachPhim = (): ThunkAction => {
  return async (dispatch) => {
    try {
      const result = await http.get(
        "/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP13"
      );
      dispatch({
        type: SET_DANH_SACH_PHIM,
        arrFilm: result.data.content,
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
};

export const getDanhSachCumRap = (): ThunkAction => {
  return async (dispatch) => {
    try {
      // const result = await http.get()
    } catch (error) {
      console.log(error);
    }
  };
};
