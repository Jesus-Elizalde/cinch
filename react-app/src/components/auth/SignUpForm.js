import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/session";

const SignUpForm = ({ modalFcn }) => {
  const { setShowLoginModal, setShowSignupModal } = modalFcn;
  console.log(setShowLoginModal, setShowSignupModal);

  const [errors, setErrors] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [role, setRole] = useState("");
  const [color, setColor] = useState("#00314a");
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const switchToLogin = () => {
    setShowLoginModal(true);
    setShowSignupModal(false);
  };

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(
        signUp(username, email, password, firstName, lastName, role, color)
      );
      if (data) {
        setErrors(data);
      }
    }
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
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="first_name"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          ></input>
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="first_name"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          ></input>
        </div>
        <div>
          <label>User Name</label>
          <input
            type="text"
            name="username"
            onChange={updateUsername}
            value={username}
          ></input>
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            onChange={updateEmail}
            value={email}
          ></input>
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={updatePassword}
            value={password}
          ></input>
        </div>
        <div>
          <label>Repeat Password</label>
          <input
            type="password"
            name="repeat_password"
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          ></input>
        </div>
        <div>
          <label>Role</label>
          <input
            type="text"
            name="role"
            onChange={(e) => setRole(e.target.value)}
            value={role}
            required={true}
          ></input>
        </div>
        <div>
          <label>Color</label>
          <input
            type="color"
            name="color"
            onChange={(e) => setColor(e.target.value)}
            value={color}
          ></input>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
