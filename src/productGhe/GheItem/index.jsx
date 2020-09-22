import React, { Component } from "react";
import { connect } from "react-redux";
class GheItem extends Component {
  state = {
    isColor: true,
  };

  handleChoseGhe = (e) => {
    e.preventDefault();
    this.setState({
      isColor: !this.state.isColor,
    });

    this.props.dispatch({
      type: "CHOOSE_GHE",
      payload: this.props.product,
    });
  };

  render() {
    const { SoGhe } = this.props.product;
    return (
      <div>
        {this.state.isColor ? (
          <button
            className={
              this.props.product.TrangThai
                ? "btn btn-danger mx-2 mt-2"
                : "btn btn-light mx-2 mt-2"
            }
            onClick={this.handleChoseGhe}
            disabled={this.props.product.TrangThai}
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
