import { CREATE_POST } from "./types";
import { showAlert } from "./actions";

const forbiddenWords = ["fuck", "php", "rainbow", "spam"];

export const forbiddenWordsMiddleware = ({ dispatch }) => (next) => (
  action
) => {
  if (action.type === CREATE_POST) {
    const found = forbiddenWords.find((el) =>
      action.payload.title.includes(el)
    );
    if (found !== undefined) {
      return dispatch(
        showAlert({
          type: "danger",
          message: `Нельзя использовать слово: <b>${found}</b>`,
        })
      );
    }
  }
  return next(action);
};
