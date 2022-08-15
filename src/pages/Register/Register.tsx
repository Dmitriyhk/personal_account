import React from "react";

import Background from "../../components/Background";

import SignUp from "../../components/SignUp";

import styles from "./Register.module.scss";

const Register = () => (
  <div className={styles.register}>
    <Background />
    <SignUp />
  </div>
);

export default Register;
