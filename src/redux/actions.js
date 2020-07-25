import {
  CREATE_POST,
  START_LOADING,
  END_LOADING,
  SHOW_ALERT,
  HIDE_ALERT,
  REQUEST_POSTS,
} from "./types";

export const addPost = (post) => ({
  type: CREATE_POST,
  payload: post,
});

export const fetchPosts = () => {
  return {
    type: REQUEST_POSTS,
  };

  // try {
  //   dispatch(startLoading());
  //   const response = await fetch(
  //     "https://jsonplaceholder.typicode.com/posts?_limit=5"
  //   );
  //   const data = await response.json();
  //   dispatch({
  //     type: FETCH_POST,
  //     payload: data,
  //   });
  //   dispatch(endLoading());
  // } catch (error) {
  //   dispatch(endLoading());
  //   dispatch(showAlert({ type: "warning", message: "Что-то пошло не так..." }));
  // }
};

export const startLoading = () => ({
  type: START_LOADING,
});

export const endLoading = () => ({
  type: END_LOADING,
});

export const showAlert = (payload) => (dispatch) => {
  dispatch({
    type: SHOW_ALERT,
    payload,
  });

  setTimeout(() => {
    dispatch(hideAlert());
  }, 3000);
};

export const hideAlert = () => ({
  type: HIDE_ALERT,
});
