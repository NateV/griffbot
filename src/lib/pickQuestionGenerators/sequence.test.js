import { sequence } from "./sequence";

describe("generate sequential interview with `sequence`", () => {
  const initialState = {
    q1: { answer: null },
    q2: { answer: null },
  };

  const questions = ["q1", "q2"];
  const QuestionComponents = ["Ask Q1", "Ask Q2"];

  const pickNextQuestion = sequence(questions, QuestionComponents);
  const fakeDispatch = () => {};

  test("picks the first question", () => {
    expect(pickNextQuestion(initialState, fakeDispatch)).toBe("Ask Q1");
  });

  test("picks the second question, if the first is answered", () => {
    const newState = { ...initialState, q1: "yes" };
    expect(pickNextQuestion(newState, fakeDispatch)).toBe("Ask Q2");
  });
});
