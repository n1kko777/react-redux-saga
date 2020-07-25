import React from "react";
import { useSelector } from "react-redux";

export const Alert = () => {
  const alert = useSelector((state) => state.app.alert);

  if (alert === null) {
    return null;
  }

  const { type, message } = alert;
  return (
    <div
      className={`alert alert-${type}`}
      role="alert"
      dangerouslySetInnerHTML={{ __html: message }}
    ></div>
  );
};
