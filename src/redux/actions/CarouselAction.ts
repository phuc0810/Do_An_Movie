import { http } from "../../util/settings/config";
import { ThunkAction } from "../configStore";
import { SET_CAROUSEL } from "./types/carouselType";

export const getCarouselAction = (): ThunkAction => {
  return async (dispatch) => {
    try {
      const result = await http.get("/api/QuanLyPhim/LayDanhSachBanner");
      dispatch({
        type: SET_CAROUSEL,
        arrImg: result.data.content,
      });
      console.log(result);
    } catch (error) {
      console.log({ error });
    }
  };
};
