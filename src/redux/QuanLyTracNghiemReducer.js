const initialState = {
  danhSachCauHoi: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LAY_DANH_SACH_CAU_HOI":
      state.danhSachCauHoi = action.danhSachCauHoi;
      return { ...state };
    default:
      return state;
  }
};
export default reducer;
