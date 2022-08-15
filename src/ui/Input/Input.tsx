import classNames from "classnames";
import React from "react";

import styles from "./Input.module.scss";

interface IInput {
  value: string;
  setValue: (key: React.ChangeEvent<HTMLInputElement>) => void | null;
  placeholder: string;
  type: string;
  label?: string;
  required?: boolean;
}

const Input: React.FC<IInput> = ({
  value,
  setValue,
  placeholder,
  type,
  label,
  required = false,
}) => (
  <label className={styles.input}>
    <span>{label}</span>
    <input
      maxLength={40}
      minLength={2}
      required={required}
      value={value}
      onChange={setValue}
      placeholder={placeholder}
      type={type}
    />
  </label>
);

export default Input;
