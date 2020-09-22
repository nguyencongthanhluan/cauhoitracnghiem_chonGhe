const initialState = {
  danhSachGheDangDat: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "CHOOSE_GHE":
      const mangGheUpdate = [...state.danhSachGheDangDat, payload];
      state.danhSachGheDangDat = mangGheUpdate;
      return { ...state };
    case "DELETE_GHE":
      const index = state.danhSachGheDangDat.findIndex(
        (ghe) => ghe.SoGhe === payload
      );
      if (index !== -1) {
        state.danhSachGheDangDat.splice(index, 1);
      }
      // console.log(state, payload);
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
