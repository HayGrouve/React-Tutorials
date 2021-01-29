import * as actions from './actionTypes';

export const bugAdded = (payload) => ({
  type: actions.BUG_ADDED,
  payload,
});
export const bugRemoved = (payload) => ({
  type: actions.BUG_REMOVED,
  payload,
});
export const bugResolved = (payload) => ({
  type: actions.BUG_RESOLVED,
  payload,
});
