import React, { useState } from "react";
import * as actions from "../actions";

export const TextField = (props) => {
  const { questionId, dispatch, defaultAnswer, labelText } = props;
  const initialAnswer = defaultAnswer || "";
  const [answer, setAnswer] = useState(initialAnswer);
  const handleChange = (e) => {
    setAnswer(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actions.updateAnswer(questionId, answer));
  };

  return (
    <form id={questionId} onSubmit={handleSubmit}>
      <label htmlFor={questionId}>{labelText}</label>
      <input
        name={questionId}
        type="text"
        value={answer}
        onChange={handleChange}
      />
      <button type="submit">Next</button>
    </form>
  );
};
