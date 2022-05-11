import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProtectedRoute from "./components/auth/ProtectedRoute";

import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar/";
import UsersList from "./components/UsersList";
import User from "./components/User";

import { authenticate } from "./store/session";
import { ModalProvider } from "./components/Context/Modal";
import Dashboard from "./components/Dashboard";
import Schedules from "./components/Schedules";
import Customers from "./components/Customers";
import Map from "./components/Map";

function App() {
  const [loaded, setLoaded] = useState(false);

  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user);

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  document.documentElement.style.setProperty("--users-color", "#00314a");
  if (user) {
    document.documentElement.style.setProperty("--users-color", user?.color);
  }

  return (
    <ModalProvider>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/login" exact={true}>
            <p>hello</p>
          </Route>
          <Route path="/sign-up" exact={true}>
            <SignUpForm />
          </Route>
          <ProtectedRoute path="/users" exact={true}>
            <UsersList />
          </ProtectedRoute>
          <ProtectedRoute path="/users/:userId" exact={true}>
            <User />
          </ProtectedRoute>
          <ProtectedRoute path="/dashboard" exact={true}>
            <Dashboard />
          </ProtectedRoute>
          <ProtectedRoute path="/schedules" exact={true}>
            <Schedules />
          </ProtectedRoute>
          <ProtectedRoute path="/customers" exact={true}>
            <Customers />
          </ProtectedRoute>
          <ProtectedRoute path="/map" exact={true}>
            <Map />
          </ProtectedRoute>
          <ProtectedRoute path="/" exact={true}>
            <h1>My Home Page</h1>
          </ProtectedRoute>
        </Switch>
      </BrowserRouter>
    </ModalProvider>
  );
}

export default App;
