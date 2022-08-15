import classNames from "classnames";
import React from "react";
import { ReactComponent as Google } from "../../assets/img/Google.svg";

import styles from "./Button.module.scss";

interface IButton {
  text: React.ReactNode | string;
  type?: "blue" | "google" | "transparent";
  classes?: string;
  callback: () => void;
}

const Button: React.FC<IButton> = ({ type, text, callback }) => (
  <button
    className={classNames(styles.button, {
      [styles.blue]: type === "blue",
      [styles.transparent]: type === "transparent",
    })}
    onClick={(e) => {
      e.preventDefault();
      callback();
    }}
  >
    {type === "google" && <Google />}
    {text}
  </button>
);

export default Button;
