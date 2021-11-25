import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./Register"
import HomePage from "./HomePage"
import PrivateRoute from './auth/auth'

ReactDOM.render(
  <Router>
  <Switch>
      <Route exact path="/" component={App} />
      <Route exact path='/register' component={Register}/>
      {/* <Route exact path='/homw' component={Register}/> */}
      <PrivateRoute exact path="/homePage" ><HomePage/></PrivateRoute>
  </Switch>
</Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
