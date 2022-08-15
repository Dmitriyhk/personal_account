import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { Dispatch, AnyAction } from "redux";
import { setError } from "../store/slices/userSlice";

import Form from "./Form/Form";

const handleLogin = async (
  email: string,
  password: string,
  dispatch: Dispatch<AnyAction>
) => {
  const auth = getAuth();
  console.log("user");
  signInWithEmailAndPassword(auth, email, password).catch(() => {
    dispatch(setError(true));
  });
};

const LoginComponent = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Form
        callback={(email, password) => handleLogin(email, password, dispatch)}
        isLogin
      />
    </div>
  );
};

export default LoginComponent;
