const initialState = {
  danhSachGheDangDat: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "CHOOSE_GHE":
      const mangGheUpdate = [...state.danhSachGheDangDat];
      const index = mangGheUpdate.findIndex(
        (ghe) => ghe.SoGhe === payload.SoGhe
      );
      if (index !== -1) {
        mangGheUpdate.splice(index, 1);
        state.danhSachGheDangDat = mangGheUpdate;
      } else {
        mangGheUpdate.push(payload);
        state.danhSachGheDangDat = mangGheUpdate;
      }
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
