import React, { useState, useEffect } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProtectedRoute from "./components/auth/ProtectedRoute";

import { authenticate } from "./store/session";
import { ModalProvider } from "./components/Context/Modal";
import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";

import DashBoard from "./pages/DashBoard";
import Jobs from "./pages/Jobs";
import Invoices from "./pages/Invoices";
import Estimates from "./pages/Estimates";
import Settings from "./pages/Settings";

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

  return (
    <ModalProvider>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/welcome" exact={true}>
            {user && <Redirect to="/home" />}
            <LandingPage />
          </Route>
          <ProtectedRoute
            path="/dashboard"
            exact={true}
            component={DashBoard}
          />
          <ProtectedRoute path="/jobs" exact={true} component={Jobs} />
          <ProtectedRoute path="/invoices" exact={true} component={Invoices} />
          <ProtectedRoute
            path="/estimates"
            exact={true}
            component={Estimates}
          />
          <ProtectedRoute path="/settings" exact={true} component={Settings} />
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
