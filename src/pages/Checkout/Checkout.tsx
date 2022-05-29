import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import {
  useChiTietPhongVe,
  useSelectorQuanLyDatVe,
} from "redux/store/QuanLyDatVe/QuanLyDatVe.selector";
import { useSelectorQuanLyNguoiDung } from "redux/store/QuanLyNguoiDung";

type Props = {};

export default function Checkout(props: Props) {
  let { thongTinDangNhap } = useSelectorQuanLyNguoiDung();
  // lay id tu` url
  let { id } = useParams<{ id: string }>();
  // truyen id len api reduxthunk
  let { chiTietPhongVe } = useChiTietPhongVe(id);
  console.log(chiTietPhongVe);

  // render danh sach ghe
  let renderDSGhe = () => {
    return chiTietPhongVe?.danhSachGhe.map((ghe, i) => {
      let gheVip = ghe.loaiGhe == "Vip" ? "gheVip" : "";
      let gheDaDat = ghe.daDat === true ? "gheDaDat" : "";
      return (
        <Fragment key={i}>
          <button
            disabled={ghe.daDat}
            className={`ghe ${gheVip} ${gheDaDat}`}
            key={i}
          >
            {ghe.stt}
          </button>
          {(i + 1) % 16 === 0 ? <br /> : ""}
        </Fragment>
      );
    });
  };

  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-12">
        {/* PHAN LUA CHON GHE */}
        <div className="col-span-9">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="bg-black w-4/5 h-4"></div>
            <div className={`trapezoid text-center text-black`}>Man` Hinh`</div>
          </div>
          <div className="text-center">{renderDSGhe()}</div>
        </div>
        {/* THANH TOAN VE */}
        <div className="col-span-3">
          <h3 className="text-green-400 text-center text-2xl">0 đ</h3>
          <hr />
          <h3 className="text-xl">{chiTietPhongVe?.thongTinPhim.tenPhim}</h3>
          <p>{chiTietPhongVe?.thongTinPhim.diaChi}</p>
          <p>
            ngày chiếu: {chiTietPhongVe?.thongTinPhim.ngayChieu} -{" "}
            {chiTietPhongVe?.thongTinPhim.gioChieu}{" "}
            {chiTietPhongVe?.thongTinPhim.tenRap}
          </p>
          <hr />
          <div className="flex flex-row my-4">
            <div className="w-4/5">
              <span className="text-red-400 text-lg">Ghế</span>
            </div>
            <div className="text-right col-span-1">
              <span className="text-green-800 text-lg">0đ</span>
            </div>
          </div>
          <hr />
          <div className="my-4">
            <i>Email</i> <br />
            {thongTinDangNhap?.email}
          </div>
          <hr />
          <div className="my-4">
            <i>Phone</i> <br />
            {thongTinDangNhap?.soDT}
          </div>
          <hr />
          <div className="mb-0 h-auto flex flex-col justify-center items-center">
            <div className="bg-green-500 text-white w-full text-center py-3 font-bold text-xl">
              ĐẶT VÉ
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
