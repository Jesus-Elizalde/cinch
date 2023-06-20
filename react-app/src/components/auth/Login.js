import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { ReactComponent as CinchLogo } from "../../static/svg/cinchlogo.svg";
import { login } from "../../store/session";

import "./Signup.css";

const Login = () => {
  const dispatch = useDispatch();

  const [creds, setCreds] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  console.log("🚀 ~ file: Login.js ~ line 14 ~ Login ~ errors", errors);

  const onLogin = async (e) => {
    e.preventDefault();
    setErrors([]);

    const data = await dispatch(login(creds, password));
    if (data) {
      setErrors(data);
    }
  };

  return (
    <div className="signup_page">
      <CinchLogo />
      <div className="signin_container">
        <h1>Sign in</h1>
        <p className="subtitle">
          New to Cinch? <NavLink to="/signup">Sign up</NavLink>
        </p>
        <p className="error">
          {errors.length !== 0 && <p>Username or password are incorrect</p>}
        </p>
        <form>
          <div className="form_group">
            <input
              className="input_fields"
              value={creds}
              type="email"
              placeholder="Email Address"
              onChange={(e) => setCreds(e.target.value)}
            />
            <input
              className="input_fields"
              value={password}
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="continue_button" onClick={onLogin}>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
