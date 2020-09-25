const initialState = {
  danhSachCauHoi: [],
  danhSachDapAn: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LAY_DANH_SACH_CAU_HOI":
      state.danhSachCauHoi = action.danhSachCauHoi;
      return { ...state };

    case "CHECK_EXACT_MULTIPLECHOICE":
      const danhSachDapAnUpdate = [...state.danhSachDapAn];
      const index = danhSachDapAnUpdate.findIndex(
        (dapAn) => dapAn.questionId === action.payload.questionId
      );
      if (index !== -1) {
        danhSachDapAnUpdate[index].answer = action.payload.answer;
        state.danhSachDapAn = danhSachDapAnUpdate;
      } else {
        danhSachDapAnUpdate.push(action.payload);
        state.danhSachDapAn = danhSachDapAnUpdate;
      }
      return { ...state };

    case "CHECK_EXACT_FILLINBLANK":
      const danhSachDapAnClone = [...state.danhSachDapAn];
      const Index = danhSachDapAnClone.findIndex(
        (dapAn) => dapAn.questionId === action.payload.questionId
      );
      if (Index !== -1) {
        danhSachDapAnClone[Index].answer = action.payload.answer;
        state.danhSachDapAn = danhSachDapAnClone;
      } else {
        danhSachDapAnClone.push(action.payload);
        state.danhSachDapAn = danhSachDapAnClone;
      }
      return { ...state };

    default:
      return state;
  }
};
export default reducer;
