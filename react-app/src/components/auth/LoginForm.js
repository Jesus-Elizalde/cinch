import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { login } from "../../store/session";

import "./Forms.css";

const LoginForm = ({ modalFcn }) => {
  const { setShowLoginModal, setShowSignupModal } = modalFcn;
  const [errors, setErrors] = useState([]);
  const [emailUsername, setEmailUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const switchToSignup = () => {
    setShowSignupModal(true);
    setShowLoginModal(false);
  };

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(emailUsername, password));
    if (data) {
      setErrors(data);
    }
  };

  const demoLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login("demo@aa.io", "password"));
    if (data) {
      setErrors(data);
      return;
    }
  };

  const updateEmailUsername = (e) => {
    setEmailUsername(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };
  // !to redirct user if logged in

  // if (user) {
  //   return <Redirect to="/dashboard" />;
  // }

  return (
    <div className="modal_container">
      <h1>Login</h1>
      <p>
        Don't have an account?{" "}
        <span onClick={switchToSignup} className="link">
          Sign Up
        </span>
      </p>

      <form onSubmit={onLogin}>
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>

        <div className="input_container flex_column">
          <label htmlFor="email">Email / Username</label>
          <input
            name="email"
            type="text"
            placeholder="Email"
            value={emailUsername}
            onChange={updateEmailUsername}
            className="input_login_signup"
          />
        </div>
        <div className="input_container flex_column">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={updatePassword}
            className="input_login_signup"
          />
          <div className="flex_row">
            <button type="submit" className="submit_form">
              Login
            </button>
            <button type="button" className="submit_form" onClick={demoLogin}>
              Demo User
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
