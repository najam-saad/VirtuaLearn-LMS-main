import ReactDOM from "react-dom";
import React from "react";

import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

// const cors = require('cors');
// app.use(cors({
//     origin: 'http://f29c-111-119-178-142.ngrok.io/api/v1/users'
// }));
ReactDOM.render(
  <BrowserRouter>
  
    <App />
    
  </BrowserRouter>,
  

  document.getElementById("root")
);
