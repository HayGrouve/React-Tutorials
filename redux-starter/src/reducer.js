import * as actions from './actionTypes';

let lastId = 0;
const initialState = {
  bugList: [],
};

export default (state = initialState.bugList, { type, payload }) => {
  switch (type) {
    case actions.BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          description: payload.description,
          resolved: false,
        },
      ];

    case actions.BUG_REMOVED:
      return state.filter((bug) => bug.id !== payload.id);

    case actions.BUG_RESOLVED:
      return state.map((bug) =>
        bug.id === payload.id ? { ...bug, resolved: true } : bug
      );

    default:
      return state;
  }
};
