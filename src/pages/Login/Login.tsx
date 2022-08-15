import React from "react";
import Background from "../../components/Background";
import LoginComponent from "../../components/LoginComponent";

import styles from "./Login.module.scss";

const Login = () => (
  <div className={styles.login}>
    <Background />
    <LoginComponent />
  </div>
);

export default Login;
