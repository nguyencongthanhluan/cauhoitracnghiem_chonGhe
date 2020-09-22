import React, { Component } from "react";
import { connect } from "react-redux";
class DanhSachGheDangDat extends Component {
  renderGheDat = () => {
    return this.props.gheDatList.map((item, index) => {
      return (
        <div key={index}>
          <span>Ghế: {item.TenGhe}</span>
          <span> Giá:{item.Gia}</span>
        </div>
      );
    });
  };
  sumGhe = () => {
    let result = 0;
    for (let item of this.props.gheDatList) {
      if (item !== 0) {
        result++;
      }
    }
    return result;
  };
  render() {
    return (
      <div>
        <h5>Danh sách ghế đã đặt </h5>
        <span>({this.sumGhe()})</span>
        {this.renderGheDat()}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    gheDatList: state.gheDatList.danhSachGheDangDat,
  };
};
export default connect(mapStateToProps)(DanhSachGheDangDat);
