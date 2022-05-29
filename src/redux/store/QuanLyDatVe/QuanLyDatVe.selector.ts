import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../rootReducer";
import { quanLyDatVeAction } from "./QuanLyDatVe.reducer";
import { getChiTietPhongVe } from "./QuanLyDatVe.thunk";

export const useSelectorQuanLyDatVe = () =>
  useSelector((state: RootState) => state.quanLyDatVeReducer);

export const useChiTietPhongVe = (maLichChieu = "") => {
  const dispatch = useDispatch<any>();
  const { chiTietPhongVe } = useSelectorQuanLyDatVe();
  useEffect(() => {
    if (!chiTietPhongVe) {
      dispatch(getChiTietPhongVe(maLichChieu));
    }
    return () => {
      dispatch(quanLyDatVeAction.setChiTietPhongVe(undefined));
    };
  }, []);
  return { chiTietPhongVe };
};
