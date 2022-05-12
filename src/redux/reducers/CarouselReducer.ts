import { SET_CAROUSEL } from "../actions/types/carouselType";

const stateDefault:stateDf = {
  imgBanner: [],
};

type stateDf = {
  imgBanner: imgBanner[];
};


export const CarouselReducer = (state = stateDefault, action:any) => {
  switch (action.type) {
    case SET_CAROUSEL: {
      state.imgBanner = action.arrImg;
      return { ...state };
    }
    default:
      return state;
  }
};

interface imgBanner {
  maBanner: number;
  maPhim: number;
  hinhAnh: string;
}