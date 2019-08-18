import React, { Fragment, useEffect } from "react";
import BootStrapNav from "./components/layout/BootStrapNav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Routes from "./components/routing/Routes";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <BootStrapNav />

          <Route component={Routes} />
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
