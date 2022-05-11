import React, { useEffect, useState } from "react";

import { ReactComponent as LogoIcon } from "../../static/svg/logo.svg";
import LoginForm from "../auth/LoginForm";
import SignUpForm from "../auth/SignUpForm";
import { Modal } from "../Context/Modal";

const NotAuthBar = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);

  const openLoginModal = () => {
    if (showLoginModal) return;
    setShowLoginModal(true);
  };
  const openSignupModal = () => {
    if (showSignupModal) return;
    setShowSignupModal(true);
  };

  useEffect(() => {
    if (showLoginModal) return;

    const closeLoginModal = () => {
      if (!showLoginModal) return;
      setShowLoginModal(false);
    };

    document.addEventListener("click", closeLoginModal);

    return () => document.removeEventListener("click", closeLoginModal);
  }, [showLoginModal]);

  useEffect(() => {
    if (showSignupModal) return;

    const closeSignupModal = () => {
      if (!showSignupModal) return;
      setShowSignupModal(false);
    };

    document.addEventListener("click", closeSignupModal);

    return () => document.removeEventListener("click", closeSignupModal);
  }, [showSignupModal]);

  const modalFcn = { setShowLoginModal, setShowSignupModal };
  return (
    <>
      <LogoIcon />
      <div className="flex_row">
        <p className="login_signup_button" onClick={openLoginModal}>
          Login
        </p>
        <p className="login_signup_button" onClick={openSignupModal}>
          Sign Up
        </p>
      </div>
      {showLoginModal && (
        <Modal onClose={() => setShowLoginModal(false)}>
          <LoginForm modalFcn={modalFcn} />
        </Modal>
      )}
      {showSignupModal && (
        <Modal onClose={() => setShowSignupModal(false)}>
          <SignUpForm modalFcn={modalFcn} />
        </Modal>
      )}
    </>
  );
};

export default NotAuthBar;
