import { combineReducers } from "redux";
import { bannerReducer } from "./QuanLyPhim/Banner/banner.reducer";
import { dsPhimReducer } from "./QuanLyPhim/DanhSachPhim/dsPhim.reducer";

export const rootReducer = combineReducers({
  // reducer redux
  bannerReducer,
  dsPhimReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
