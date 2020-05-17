import React, { useState } from "react";
import * as actions from "../actions";

export const ButtonOptionsField = (props) => {
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
  console.log("button options field");
  return (
    <form id={questionId} onSubmit={handleSubmit}>
      <label htmlFor={questionId}>{labelText}</label>
      <div>
        {props.children.map((button, idx) => {
          return (
            <div key={idx}>
              {React.cloneElement(button, { onClick: handleChange })}
            </div>
          );
        })}
      </div>
    </form>
  );
};
