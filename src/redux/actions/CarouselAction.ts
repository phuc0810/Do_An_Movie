import { AnyAction } from "redux";
import { http } from "../../util/settings/config";
import { SET_CAROUSEL } from "./types/carouselType";

//Naay neu dinh nghia kieu du lieu cho action thi phai tao them
export const getCarouselAction = (): Promise<void> => {
  return async (dispatch)  => {
    try {
      const result = await http.get("/api/QuanLyPhim/LayDanhSachBanner");
      dispatch({
        type: SET_CAROUSEL,
        arrImg: result.data.content,
      });
      console.log(result);
    } catch (error) {
      console.log({error});
    }
  };
};
