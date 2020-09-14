import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Sign from './components/Sign';
import Dashboard from './components/Dashboard';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <React.Fragment>
      <Provider store={store}>
      <Router>
        <Header handleShow={handleShow} />
        <div className="container">
          <Switch>
          <Route path="/dashboard">
              <Dashboard handleShow={handleShow} show={show} handleClose={handleClose} />
            </Route>
            <Route path="/sign-up">
              <Sign />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>

        </div>
      </Router>
      </Provider>
    </React.Fragment>
  );
}

export default App;
