import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import { ReactComponent as Bat } from "../../assets/img/Bat.svg";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useAppSelector } from "../../types/hooks";

import styles from "./Form.module.scss";

interface IForm {
  callback: (email: string, password: string) => void;
  isLogin?: boolean;
}

const Form: React.FC<IForm> = ({ callback, isLogin = false }) => {
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");
  const { isError } = useAppSelector((state) => state.user);
  const loginGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    await signInWithPopup(auth, provider);
  };

  return (
    <div className={styles.form}>
      <div className={styles.form_logo}>
        <Bat className={styles.form_logo__icon} />
        <span className={styles.form_logo__text}>Cute bat</span>
      </div>
      <h2>Nice to see you!</h2>
      <form className={styles.form_main}>
        <div className={styles.form_main__inputs}>
          <Input
            label="Login"
            type="email"
            value={login}
            placeholder="Enter email"
            setValue={(e) => setLogin(e.target.value)}
            required
          />
          <Input
            label="Password"
            type="password"
            value={pass}
            placeholder="Enter password"
            setValue={(e) => setPass(e.target.value)}
            required
          />
        </div>

        <Button
          callback={() => callback(login, pass)}
          type="blue"
          text="Sign in"
        />
        <span className={styles.form_main__error}>
          {isError && "Invalid Email or Password."}
        </span>
      </form>
      <Button
        callback={loginGoogle}
        type="google"
        text="Or sign in with Google
"
      />
      <span className={styles.form_signUp}>
        {isLogin ? (
          <>
            Dont have an account? <Link to="/register">Sign up now</Link>
          </>
        ) : (
          <>
            Do you have an account? <Link to="/login">Login now</Link>
          </>
        )}
      </span>
    </div>
  );
};

export default Form;
