import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from "antd";
import { useFormik } from "formik";
import moment from "moment";
import { useDispatch } from "react-redux";
import { postThemPhimUploadHinhAnh } from "redux/store/QuanLyPhim/DanhSachPhim/dsPhim.thunk";

type SizeType = Parameters<typeof Form>[0]["size"];

const AddNew = () => {
  const [componentSize, setComponentSize] = useState<SizeType | "default">(
    "default"
  );

  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };

  let [imgSrc, setImgSrc] = useState<any>("");

  let dispatch = useDispatch<any>();

  const formilk = useFormik({
    initialValues: {
      tenPhim: "",
      trailer: "",
      moTa: "",
      ngayKhoiChieu: "",
      dangChieu: false,
      sapChieu: false,
      hot: false,
      danhGia: 0,
      hinhAnh: {},
    },
    onSubmit: (values: any) => {
      console.log(values);

      // tạo đối tượng form dâta
      let formData = new FormData();
      for (let key in values) {
        if (key !== "hinhAnh") {
          formData.append(key, key[values]);
        } else {
          formData.append("File", values.hinhAnh, values.hinhAnh.name);
        }
      }
      console.log("fromData", formData.get("tenPhim"));

      //call api
      dispatch(postThemPhimUploadHinhAnh(formData));
    },
  });

  let handleChangeDate = (values: any) => {
    let ngayKhoiChieu = moment(values).format("DD/MM/YYYY");
    console.log(ngayKhoiChieu);
    formilk.setFieldValue("ngayKhoiChieu", ngayKhoiChieu);
  };

  let handleChangeSwitch = (name: string) => {
    return (value: any) => {
      formilk.setFieldValue(name, value);
    };
  };

  let handleChangeInputNumber = (name: string) => {
    return (values: any) => {
      formilk.setFieldValue(name, values);
    };
  };

  let handleChangFile = (e: any) => {
    let file = e.target.files[0];
    // tao doi tuong de doc file
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      setImgSrc(e.target?.result);
    };
    formilk.setFieldValue("hinhAnh", file);
    // console.log(file);
  };

  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      initialValues={{ size: componentSize }}
      onValuesChange={onFormLayoutChange}
      size={componentSize as SizeType}
      onSubmitCapture={formilk.handleSubmit}
    >
      <Form.Item label="Tên phim">
        <Input name="tenPhim" onChange={formilk.handleChange} />
      </Form.Item>
      <Form.Item label="Trailer">
        <Input name="trailer" onChange={formilk.handleChange} />
      </Form.Item>
      <Form.Item label="Mô tả">
        <Input name="moTa" onChange={formilk.handleChange} />
      </Form.Item>
      <Form.Item label="Ngày khởi chiếu">
        <DatePicker
          name="ngayKhoiChieu"
          format={"DD/MM/YYYY"}
          onChange={handleChangeDate}
        />
      </Form.Item>
      <Form.Item label="Đang chiếu" valuePropName="checked">
        <Switch onChange={handleChangeSwitch("dangChieu")} />
      </Form.Item>
      <Form.Item label="Sắp chiếu" valuePropName="checked">
        <Switch onChange={handleChangeSwitch("sapChieu")} />
      </Form.Item>
      <Form.Item label="Hot" valuePropName="checked">
        <Switch onChange={handleChangeSwitch("hot")} />
      </Form.Item>
      <Form.Item label="Đánh Giá">
        <InputNumber
          onChange={handleChangeInputNumber("danhGia")}
          max={10}
          min={1}
        />
      </Form.Item>
      <Form.Item label="Hinh anh">
        <input
          type="file"
          onChange={handleChangFile}
          accept="image/png, image/jpeg"
        />
        <img width={200} height={200} src={imgSrc} alt="..." />
      </Form.Item>
      <Form.Item label="Tác vụ">
        <button className="bg-blue-400 p-2" type="submit">
          submit
        </button>
      </Form.Item>
    </Form>
  );
};

export default AddNew;
