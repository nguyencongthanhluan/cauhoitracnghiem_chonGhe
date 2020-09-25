import React, { Component } from "react";
import { connect } from "react-redux";

class MultipleChoice extends Component {
  handleCheckExact = (id, content, exact) => {
    this.props.dispatch({
      type: "CHECK_EXACT_MULTIPLECHOICE",
      payload: {
        questionId: id,
        answer: {
          content: content,
          exact: exact,
        },
      },
    });
  };

  render() {
    const { id, content, answers } = this.props.item;
    return (
      <div>
        <h5 className="ml-2">
          Câu {id}: {content}
        </h5>
        {answers.map((answer, index) => (
          <div key={index}>
            <input
              onChange={() =>
                this.handleCheckExact(id, answer.content, answer.exact)
              }
              type="radio"
              value={answer.id}
              name={id}
              className="mx-4"
            />
            <label>{answer.content} </label>
          </div>
        ))}
      </div>
    );
  }
}

export default connect()(MultipleChoice);
