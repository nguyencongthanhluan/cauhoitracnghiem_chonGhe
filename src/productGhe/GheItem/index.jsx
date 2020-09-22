import React, { Component } from "react";
import { connect } from "react-redux";
class GheItem extends Component {
  state = {
    isColor: true,
    sv: {
      TenGhe: "",
      Gia: "",
    },
  };

  handleChoseGhe = (e) => {
    e.preventDefault();

    console.log(this.props.product.SoGhe);
    this.setState({
      isColor: !this.state.isColor,
    });

    this.props.dispatch({
      type: "CHOOSE_GHE",
      payload: this.props.product,
    });
  };

  showColor = () => {
    return {
      backgroundColor: "red",
    };
  };
  render() {
    const { SoGhe } = this.props.product;
    return (
      <div>
        {this.state.isColor ? (
          <button
            className="btn btn-light mx-2 mt-2"
            onClick={this.handleChoseGhe}
            disabled={this.props.product.TrangThai ? true : false}
          >
            {SoGhe}
          </button>
        ) : (
          <>
            <button
              className="btn btn-success mx-2 mt-2"
              onClick={this.handleChoseGhe}
            >
              {SoGhe}
            </button>
          </>
        )}
      </div>
    );
  }
}

export default connect()(GheItem);
