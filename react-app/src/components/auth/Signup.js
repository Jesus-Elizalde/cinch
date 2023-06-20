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
  console.log("🚀 ~ file: Signup.js ~ line 22 ~ Signup ~ errors", errors);

  const onSignUp = async (e) => {
    e.preventDefault();

    if (password === repeatPassword) {
      const data = await dispatch(
        signUp(email, password, firstName, lastName, username)
      );

      if (data) {
        setErrors(data);
      }
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
      <div className="signin_container">
        <h1>Let's create your account</h1>
        <div className="subtitle">
          <p>Signing up for Cinch is fast and free.</p>
          <p>No commitments or long-term contracts</p>
        </div>

        <form>
          <div className="form_group">
            <input
              className="input_fields"
              value={username}
              placeholder="Enter your username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <p className="error">
              {errors
                .filter(
                  (error) =>
                    error.includes("username : This field is required.") ||
                    error.includes("username : Username is already in use.")
                )
                .map((error) => error.slice(10))}
            </p>
            <input
              className="input_fields"
              value={firstName}
              placeholder="Enter your first name"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <p className="error">
              {errors
                .filter((error) =>
                  error.includes("first_name : This field is required.")
                )
                .map((error) => error.slice(12))}
            </p>
            <input
              className="input_fields"
              value={lastName}
              placeholder="Enter your last name"
              onChange={(e) => setLastName(e.target.value)}
            />
            <p className="error">
              {errors
                .filter((error) =>
                  error.includes("last_name : This field is required.")
                )
                .map((error) => error.slice(11))}
            </p>
            <input
              className="input_fields"
              value={email}
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="error">
              {errors
                .filter(
                  (error) =>
                    error.includes("email : Email not valid.") ||
                    error.includes("email : Email address is already in use.")
                )
                .map((error) => error.slice(7))}
            </p>
            <input
              className="input_fields"
              value={password}
              type="password"
              placeholder="Create a password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="error">
              {errors
                .filter((error) =>
                  error.includes("password : This field is required.")
                )
                .map((error) => error.slice(10))}
            </p>
            <input
              className="input_fields"
              value={repeatPassword}
              type="password"
              placeholder="Confirm your password"
              onChange={(e) => setRepeatPassword(e.target.value)}
            />
            <p className="error">
              {errors
                .filter((error) =>
                  error.includes("The password you entered do not match")
                )
                .map((error) => error)}
            </p>
            <div className="flex_row agreement_box">
              <input
                checked={checked}
                type="checkbox"
                onChange={() => setChecked(!checked)}
              />
              <h6>I agree to create an account</h6>
            </div>
            <p className="error">
              {errors
                .filter((error) =>
                  error.includes("Please accept the terms and conditions")
                )
                .map((error) => error)}
            </p>
            <button onClick={onSignUp} className="continue_button">
              Continue
            </button>
            <p className="login_link">
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
