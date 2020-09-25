import React, { Component } from "react";
import { connect } from "react-redux";
import FillInBlank from "../FillInBlank";
import MultipleChoice from "../MultipleChoice";
import LayDanhSachCauHoiAction from "../../redux/action/QuanLyTracNghiem";

class Home extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const trueAnswer = this.props.answerList.filter(
      (answer) => answer.answer.exact
    );
    alert(
      `Số câu đúng: ${trueAnswer.length}/${this.props.questionList.length}`
    );
  };

  render() {
    return (
      <div>
        {this.props.questionList.map((item, index) => {
          if (item.questionType === 1) {
            return <MultipleChoice item={item} key={index} />;
          } else {
            return <FillInBlank item={item} key={index} />;
          }
        })}
        <button
          type="submit"
          onClick={(event) => this.handleSubmit(event)}
          className="btn btn-success my-4"
          style={{ fontSize: "20px", marginLeft: "20rem" }}
        >
          Submit
        </button>
      </div>
    );
  }
  componentDidMount() {
    this.props.dispatch(LayDanhSachCauHoiAction());
  }
}

const mapStateToProps = (state) => {
  return {
    questionList: state.QuanLyTracNghiemReducer.danhSachCauHoi,
    answerList: state.QuanLyTracNghiemReducer.danhSachDapAn,
  };
};

export default connect(mapStateToProps)(Home);
