import { ThongTinDangNhap } from "@types";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../rootReducer";
import { getDangNhap } from "./QuanLyNguoiDung.thunk";

export const useSelectorQuanLyNguoiDung = () =>
  useSelector((state: RootState) => state.quanLyNguoiDungReducer);

export const useDangNhap = (values:any) => {
  const dispatch = useDispatch<any>();
  const { thongTinDangNhap } = useSelectorQuanLyNguoiDung();
  useEffect(() => {
    if (!thongTinDangNhap) {
      dispatch(getDangNhap(values));
    }
  }, []);

  return { thongTinDangNhap };
};
