import { takeEvery, put, call } from "redux-saga/effects";
import { REQUEST_POSTS, FETCH_POST } from "./types";
import { startLoading, endLoading, showAlert } from "./actions";

export function* sagaWatcher() {
  yield takeEvery(REQUEST_POSTS, sagaWorker);
}

function* sagaWorker() {
  try {
    yield put(startLoading());
    const payload = yield call(fetchPosts);
    yield put({ type: FETCH_POST, payload });
    yield put(endLoading());
  } catch (error) {
    yield put(endLoading());
    yield put(
      showAlert({ type: "warning", message: "Что-то пошло не так..." })
    );
  }
}

async function fetchPosts() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  return await response.json();
}
