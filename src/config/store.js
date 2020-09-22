import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import gheList from "./../redux/gheList";
import gheDatList from "../redux/gheDatList";
import QuanLyTracNghiemReducer from "../redux/QuanLyTracNghiemReducer";
import reduxThunk from "redux-thunk";

const reducer = combineReducers({
  gheList,
  gheDatList,
  QuanLyTracNghiemReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(reduxThunk))
);

export default store;
