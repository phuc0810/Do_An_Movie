import { combineReducers } from "redux";
import { bannerReducer } from "./QuanLyPhim/Banner/banner.reducer";

export const rootReducer = combineReducers({
  // reducer redux
  bannerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
