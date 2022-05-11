import { SET_CAROUSEL } from "../actions/types/carouselType";

const stateDefault = {};

export const CarouselReducer = (state = stateDefault, action: any) => {
  switch (action.type) {
    case SET_CAROUSEL: {
      
      return { ...state };
    }
    default:
      return state;
  }
};
