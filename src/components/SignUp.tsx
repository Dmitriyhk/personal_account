import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { Dispatch, AnyAction } from "redux";
import { setError } from "../store/slices/userSlice";

import Form from "./Form/Form";

const handleRegister = async (
  email: string,
  password: string,
  dispatch: Dispatch<AnyAction>
) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password).catch(() => {
    dispatch(setError(true));
  });
};
const SignUp = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Form
        callback={(email, password) =>
          handleRegister(email, password, dispatch)
        }
      />
    </div>
  );
};

export default SignUp;
