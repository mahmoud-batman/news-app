import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  loading: false,
  newFeeds: [],
  feedsCount: 0,
};

const loading = (state, action) => {
  return updateObject(state, {
    loading: action.payload,
  });
};

const getNewFeeds = (state, action) => {
  let uniqueArray = [...new Set([...state.newFeeds, ...action.payload])];

  return updateObject(state, {
    newFeeds: [...uniqueArray],
    feedsCount: [...uniqueArray].length,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOADING:
      return loading(state, action);
    case actionTypes.GET_NEWS_FEED:
      return getNewFeeds(state, action);

    default:
      return state;
  }
};
export default reducer;
