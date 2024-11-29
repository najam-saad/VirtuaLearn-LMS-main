import ReactDOM from 'react-dom'
import React from 'react'
import { v4 as uuidv4 } from 'uuid';

import SignIn from "./Components/signIn-signUp/SignIn";
import SignUp from "./Components/signIn-signUp/SignUp";

import { Switch, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./Components/pages/landingPage/LandingPage";

import UserDashboardComponent from "./Components/pages/dashboard/user-dashboard/UserDashboard";
import Assessment from './Components/pages/dashboard/user-dashboard/Assessment';
import AdminDashboard from "../src/Components/pages/dashboard/admin-dashboard/AdminDashboard/AdminDashboard"


function App() {
  
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/sign-In" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/dashboard" component={UserDashboardComponent} />
        <Route path="/admin-dashboard" component={AdminDashboard} />
        <Route path="/assessment" component={Assessment}/>
      </Switch>{" "}
    </div>
  );
}

export default App
