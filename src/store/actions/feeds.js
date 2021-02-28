import axios from "axios";
import * as actionTypes from "../actions/actionTypes";
import { serverUrl } from "../utility";

export const loading = (loading) => {
  return {
    type: actionTypes.LOADING,
    payload: loading,
  };
};

export const getNews = (skip, limit) => {
  return (dispatch) => {
    dispatch(loading(true));
    axios
      .get(serverUrl(skip, limit))
      .then((res) => {
        dispatch(loading(false));
        dispatch({ type: actionTypes.GET_NEWS_FEED, payload: res.data.news });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
