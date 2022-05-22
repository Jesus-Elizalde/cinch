import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { signUp } from "../../store/session";

import "./Forms.css";

const SignUpForm = ({ modalFcn }) => {
  const { setShowLoginModal, setShowSignupModal } = modalFcn;

  const [errors, setErrors] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const [color, setColor] = useState("#00314a");

  const dispatch = useDispatch();

  const switchToLogin = () => {
    setShowLoginModal(true);
    setShowSignupModal(false);
  };

  const onSignUp = async (e) => {
    e.preventDefault();

    if (password === repeatPassword) {
      const data = await dispatch(
        signUp(username, email, password, firstName, lastName, "owner", color)
      );
      if (data) {
        setErrors(data);
      }
      return;
    }
    setErrors(["Password doesn't match"]);
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  // if (user) {
  //   return <Redirect to="/" />;
  // }

  return (
    <div className="modal_container">
      <h1>Sign Up</h1>
      <p>
        Have an account?{" "}
        <span onClick={switchToLogin} className="link">
          Login
        </span>
      </p>
      <form onSubmit={onSignUp}>
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div className="input_container flex_column">
          <label>First Name</label>
          <input
            type="text"
            name="first_name"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          ></input>
        </div>
        <div className="input_container flex_column">
          <label>Last Name</label>
          <input
            type="text"
            name="first_name"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          ></input>
        </div>
        <div className="input_container flex_column">
          <label>User Name</label>
          <input
            type="text"
            name="username"
            onChange={updateUsername}
            value={username}
          ></input>
        </div>
        <div className="input_container flex_column">
          <label>Email</label>
          <input
            type="text"
            name="email"
            onChange={updateEmail}
            value={email}
          ></input>
        </div>
        <div className="input_container flex_column">
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={updatePassword}
            value={password}
          ></input>
        </div>
        <div className="input_container flex_column">
          <label>Repeat Password</label>
          <input
            type="password"
            name="repeat_password"
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          ></input>
        </div>
        <div className="flex_row role_color_box">
          <div className="input_container flex_column">
            <label>Color</label>
            <input
              type="color"
              name="color"
              onChange={(e) => setColor(e.target.value)}
              value={color}
            ></input>
          </div>
        </div>
        <button type="submit" className="submit_form">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
