import React, { Fragment } from "react";
import style from "./input.module.css";

const Input: React.FC<{
  data: string;
}> = () => {
  return (
    <Fragment>
      <input type="text" />
    </Fragment>
  );
};

export default Input;
