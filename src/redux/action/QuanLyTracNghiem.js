import axios from "axios";

const LayDanhSachCauHoiAction = () => {
  return (dispatch) => {
    axios({
      url: "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/questions",
      method: "GET",
    })
      .then((res) => {
        dispatch({
          type: "LAY_DANH_SACH_CAU_HOI",
          danhSachCauHoi: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export default LayDanhSachCauHoiAction;
