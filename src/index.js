import React from "react";
import ReactDOM from "react-dom";
import { Questioner } from "./lib";
import { ButtonOptionsField } from "./lib/questionTypes";

const initialState = { isThisGreatOrWhat: { answer: null } };

const GreatOrWhat = (props) => {
  return (
    <div>
      <h2>Is this great or what?</h2>
      <ButtonOptionsField {...props} labelText="So?">
        <button value="great">Great!</button>
        <button value="what">What...</button>
      </ButtonOptionsField>
    </div>
  );
};

const pickNextQuestion = (interviewState, dispatch) => {
  console.log("picking component");
  switch (interviewState.isThisGreatOrWhat.answer) {
    case "great":
      return <div> I agree. </div>;
    case "what":
      return <div> Aww. Darn. </div>;
    default:
      console.log("picked GreatOrWhat");
      return <GreatOrWhat questionId="isThisGreatOrWhat" dispatch={dispatch} />;
  }
};
const App = () => {
  return (
    <div>
      <h1> Griffbot </h1>
      <h2>A lightweight library for asking lots of questions</h2>
      <div></div>
      <Questioner
        initialState={initialState}
        pickNextQuestion={pickNextQuestion}
      ></Questioner>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
