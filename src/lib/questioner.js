import React, { useReducer } from "react";
import { defaultReducer } from "./reducers";

const defaultCreateQuestions = (questions) => questions;

/**
 * Display the next question in a guided interview.
 *
 * customReducer is optional. The default handles some common actions.
 * createQuetions is optional. The default just returns the initial state.
 * @param {*} props
 */
export const Questioner = (props) => {
  const {
    initialState,
    pickNextQuestion,
    customReducer,
    createQuestions,
  } = props;
  const [interviewState, dispatch] = useReducer(
    customReducer || defaultReducer,
    initialState,
    createQuestions || defaultCreateQuestions
  );

  return <>{pickNextQuestion(interviewState, dispatch)}</>;
};

// A Redux-connected version of this
// would only need the relevant slice of state and the dispatch function.
