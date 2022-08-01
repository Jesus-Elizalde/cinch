import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as CinchLogo } from "../../static/svg/cinchlogo.svg";
import { useDispatch } from "react-redux";

import "./Signup.css";
import { signUp } from "../../store/session";

const Signup = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");

  const [checked, setChecked] = useState(false);
  const [errors, setErrors] = useState([]);

  const onSignUp = async (e) => {
    e.preventDefault();

    if (password === repeatPassword) {
      const data = await dispatch(
        signUp(email, password, firstName, lastName, username)
      );
      console.log("🚀 ~ file: Signup.js ~ line 30 ~ onSignUp ~ data", data);

      if (data.errors) {
        setErrors(data);
      }
      return;
    }

    if (!checked) {
      return setErrors(["Please accept the terms and conditions"]);
    }
    if (password !== repeatPassword) {
      return setErrors(["The password you entered do not match"]);
    }
  };

  return (
    <div className="signup_page">
      <CinchLogo />
      <div>
        <h1>Let's create your account</h1>
        <p>Signing up for Cinch is fast and free.</p>
        <p>No commitments or long-term contracts</p>
        <form>
          <div className="form-group">
            <input
              value={username}
              placeholder="Enter your username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <p className="error">{errors[0]}</p>
            <input
              value={firstName}
              placeholder="Enter your first name"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <p className="error">{errors[0]}</p>
            <input
              value={lastName}
              placeholder="Enter your last name"
              onChange={(e) => setLastName(e.target.value)}
            />
            <p className="error">{errors[0]}</p>
            <input
              value={email}
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="error">{errors[0]}</p>
            <input
              value={password}
              type="password"
              placeholder="Create a password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="error">{errors[0]}</p>
            <input
              value={repeatPassword}
              type="password"
              placeholder="Confirm your password"
              onChange={(e) => setRepeatPassword(e.target.value)}
            />
            <p className="error">{errors[0]}</p>
            <div className="flex_row">
              <input
                checked={checked}
                type="checkbox"
                onChange={() => setChecked(!checked)}
              />
              <h5>I agree to create an account</h5>
            </div>
            <button onClick={onSignUp}>Continue</button>
            <p>
              Already have a Cinch account?{" "}
              <NavLink to="/login">Sign in</NavLink>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
