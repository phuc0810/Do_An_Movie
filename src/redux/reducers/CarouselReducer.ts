const stateDefault = {
  content: [
    {
      maBanner: 1,
      maPhim: 1282,
      hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/ban-tay-diet-quy.png",
    },
  ],
};

export const CarouselReducer = (state = stateDefault, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
