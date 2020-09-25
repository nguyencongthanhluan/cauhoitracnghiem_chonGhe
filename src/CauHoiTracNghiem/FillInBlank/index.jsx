import React, { Component } from "react";
import { connect } from "react-redux";

class FillInBlank extends Component {
  handleCheckExact = (id, answers, event) => {
    if (
      event.target.value.trim().toLowerCase() ===
      answers[0].content.toLowerCase()
    ) {
      this.props.dispatch({
        type: "CHECK_EXACT_FILLINBLANK",
        payload: {
          questionId: id,
          answer: {
            content: event.target.value,
            exact: true,
          },
        },
      });
    } else {
      this.props.dispatch({
        type: "CHECK_EXACT_FILLINBLANK",
        payload: {
          questionId: id,
          answer: {
            content: event.target.value,
            exact: false,
          },
        },
      });
    }
  };
  render() {
    const { id, content, answers } = this.props.item;
    return (
      <div>
        <h5 className="ml-2">
          Câu {id} : {content}
        </h5>
        <input
          onChange={(event) => this.handleCheckExact(id, answers, event)}
          id={id}
          type="text"
          className="form-control w-50 ml-4"
        />
      </div>
    );
  }
}

export default connect()(FillInBlank);
