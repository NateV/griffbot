import * as actions from "../actions";

export const defaultReducer = (state, action) => {
  switch (action.type) {
    case actions.UPDATE_ANSWER:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          answer: action.payload.answer,
        },
      };

    default:
      return state;
  }
};
