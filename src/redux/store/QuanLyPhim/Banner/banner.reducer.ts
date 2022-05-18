import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { imgBanner } from "@types";

interface initialState {
  imgBanner?: imgBanner[];
}

const initialState: initialState = {
};

export const { reducer: bannerReducer, actions: bannerAction } = createSlice({
  name: "banner",
  initialState,
  reducers: {
    setBanner: (state, action: PayloadAction<imgBanner[]>) => {
      state.imgBanner = action.payload;
    },
  },
});
