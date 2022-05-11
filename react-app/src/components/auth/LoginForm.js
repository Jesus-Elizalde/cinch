import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../store/session";

const LoginForm = ({ modalFcn }) => {
  const { setShowLoginModal, setShowSignupModal } = modalFcn;
  const [errors, setErrors] = useState([]);
  const [emailUsername, setEmailUsername] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state) => state.session.user);
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

  const updateEmailUsername = (e) => {
    setEmailUsername(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };
  // !to redirct user if logged in
  // if (user) {
  //   return <Redirect to="/" />;
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
        <div>
          <label htmlFor="email">Email / Username</label>
          <input
            name="email"
            type="text"
            placeholder="Email"
            value={emailUsername}
            onChange={updateEmailUsername}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={updatePassword}
          />
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
