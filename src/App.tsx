import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Loader from "./ui/Loader";

const App = () => {
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loader />;
  }
  return (
    <Routes>
      <Route
        path="/"
        element={auth?.currentUser ? <Home /> : <Navigate to="/login" />}
      />
      <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
      <Route
        path="/register"
        element={!user ? <Register /> : <Navigate to="/" />}
      />
    </Routes>
  );
};

export default App;
