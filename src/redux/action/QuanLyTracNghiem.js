import axios from "axios";

export const LayDanhSachCauHoiAction = () => {
  return (dispatch) => {
    axios({
      url: "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/questions",
      method: "GET",
    })
      .then((res) => {
        const action = {
          type: "LAY_DANH_SACH_CAU_HOI",
          danhSachCauHoi: res.data,
        };
        console.log(res);
        //dispatch len reducer sau khi lay du lieu tu api ve
        dispatch(action);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
