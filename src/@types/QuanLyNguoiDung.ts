export const ACCESSTOKEN = "ACCESSTOKEN";
export const USER_LOGIN = "USER_LOGIN";

export interface ThongTinDangNhap {
  taiKhoan: string;
  hoTen: string;
  email: string;
  soDT: string;
  maNhom: string;
  maLoaiNguoiDung: string;
  accessToken: string;
}

