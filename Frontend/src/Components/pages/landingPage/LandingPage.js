import React from "react";

import SignIn from "../../signIn-signUp/SignIn";
import Header from "../../header/Header";
import AppBody from "../../body/Body";

import { Switch, Route, BrowserRouter } from "react-router-dom";

function LandingPage() {
  return (
    <div className="App">
      <Header />
        <AppBody />
      
    </div>
  );
}

export default LandingPage;
