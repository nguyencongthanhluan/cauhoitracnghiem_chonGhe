import React, { Component } from "react";
import { connect } from "react-redux";
class DanhSachGheDangDat extends Component {
  renderGheDat = () => {
    return this.props.gheDatList.map((item, index) => {
      return (
        <div key={index} className="mb-2">
          <span>Ghế: {item.TenGhe}</span>
          <span className="ml-3">Giá: ${item.Gia}</span>
        </div>
      );
    });
  };

  sumGhe = () => {
    return this.props.gheDatList.length;
  };

  render() {
    return (
      <div style={{ color: "#fff" }}>
        <h5>Danh sách ghế đã đặt </h5>
        <span>( {this.sumGhe()} )</span>
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
