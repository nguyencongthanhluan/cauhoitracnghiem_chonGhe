import React, { Component } from "react";
import { connect } from "react-redux";
import DanhSachGheDangDat from "../DanhSachGheDangDat";
import GheItem from "../GheItem";
class DanhSachGhe extends Component {
  renderGhe = () => {
    return this.props.gheList.map((item, index) => {
      return (
        <div className="col-3" key={index}>
          <GheItem product={item} />
        </div>
      );
    });
  };

  render() {
    return (
      <div
        className="container text-center py-5 mt-3"
        style={{ width: "500px", background: "gray" }}
      >
        <h1>ĐẶT VÉ XE BUÝT</h1>

        <div className="row">
          <div className="col-6">
            <button className="btn btn-danger px-5 mb-3">Tài xế</button>
            <div className="row">{this.renderGhe()}</div>
          </div>

          <div className="col-6">
            <DanhSachGheDangDat />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gheList: state.gheList,
  };
};

export default connect(mapStateToProps)(DanhSachGhe);
