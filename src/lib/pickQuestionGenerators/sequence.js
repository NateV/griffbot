/**
 * Generate a pickNextQuestion function that asks a list of questions in a sequence.
 * @param {*} questions     List of question ids
 * @param {*} QuestionComponents    List of components that ask the questions
 */
export const sequence = (questions, QuestionComponents) => {
  // return a function that

  return (interviewState, dispatch) => {
    for (let [idx, q] of questions.entries()) {
      // Return the component matching the first question without an answer.
      if (interviewState[q].answer === null) {
        return QuestionComponents[idx];
      }
    }
    return null;
  };
};
