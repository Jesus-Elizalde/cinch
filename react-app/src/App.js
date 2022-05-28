import React, { useState, useEffect } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProtectedRoute from "./components/auth/ProtectedRoute";

import NavBar from "./components/NavBar/";
import UsersList from "./components/UsersList";
import User from "./components/User";

import { authenticate } from "./store/session";
import { getBusinessesDetails } from "./store/business";
import { ModalProvider } from "./components/Context/Modal";
import Dashboard from "./components/Dashboard";
import Schedules from "./components/Schedules";
import Customers from "./components/Customers";
import Map from "./components/Map";
import LandingPage from "./components/LandingPage";
import Account from "./components/Account";
import Company from "./components/Account/Company";
import SingleCustomerDetails from "./components/Customers/SingleCustomerDetails";
import { getKeyDetails } from "./store/apiKey";
import PriceBook from "./components/PriceBook";
import { getCategoriesDetails } from "./store/category";
import { getServicesDetails } from "./store/service";
import NewJob from "./components/Jobs/NewJob";
import { getJobsDetailts } from "./store/job";
import EditJob from "./components/Jobs/EditJob";

import chroma from "chroma-js";

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

  useEffect(() => {
    dispatch(getBusinessesDetails());
    dispatch(getKeyDetails());
    dispatch(getCategoriesDetails());
    dispatch(getServicesDetails());
    dispatch(getJobsDetailts());
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  document.documentElement.style.setProperty("--users-color", "#00314a");
  document.documentElement.style.setProperty(
    "--svg-color",
    "brightness(0) saturate(100%) invert(0%) sepia(83%) saturate(7500%) hue-rotate(290deg) brightness(81%) contrast(113%)"
  );
  if (user) {
    document.documentElement.style.setProperty("--users-color", user?.color);
    // document.documentElement.style.setProperty(
    //   "--svg-color",
    //   "brightness(0) saturate(100%) invert(0%) sepia(83%) saturate(7500%) hue-rotate(290deg) brightness(81%) contrast(113%)"
    // );
    chroma(user?.color).luminance() >= 0.6
      ? document.documentElement.style.setProperty(
          "--svg-color",
          "brightness(0) saturate(100%) invert(0%) sepia(83%) saturate(7500%) hue-rotate(290deg) brightness(81%) contrast(113%)"
        )
      : document.documentElement.style.setProperty(
          "--svg-color",
          "brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(2%) hue-rotate(299deg) brightness(113%) contrast(100%)"
        );
  }

  return (
    <ModalProvider>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/welcome" exact={true}>
            {user && <Redirect to="/customers" />}
            <LandingPage />
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
          <ProtectedRoute path="/jobs" exact={true}>
            <Schedules />
          </ProtectedRoute>
          <ProtectedRoute path="/customers" exact={true}>
            <Customers />
          </ProtectedRoute>
          <ProtectedRoute path="/customers/:id" exact={true}>
            <SingleCustomerDetails />
          </ProtectedRoute>
          <ProtectedRoute path="/jobs/new" exact={true}>
            <NewJob />
          </ProtectedRoute>
          <ProtectedRoute path="/jobs/:id/edit" exact={true}>
            <EditJob />
          </ProtectedRoute>
          <ProtectedRoute path="/map" exact={true}>
            <Map />
          </ProtectedRoute>
          <ProtectedRoute path="/account" exact={true}>
            <Account />
          </ProtectedRoute>
          <ProtectedRoute path="/account/company" exact={true}>
            <Company />
          </ProtectedRoute>
          <ProtectedRoute path="/account/employees" exact={true}>
            <Account />
          </ProtectedRoute>
          <ProtectedRoute path="/account/booklists" exact={true}>
            <PriceBook />
          </ProtectedRoute>
          <Route path="/" exact={true}>
            <Redirect to="/welcome" />
          </Route>
          <Route>
            <h1>404 page not found</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </ModalProvider>
  );
}

export default App;
