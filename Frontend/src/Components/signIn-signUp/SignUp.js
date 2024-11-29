import LockSharpIcon from "@mui/icons-material/LockSharp";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import { flexbox } from "@mui/system";
import "./SignUp.scss";
import { Route, Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import UserDashboardComponent from "../pages/dashboard/user-dashboard/UserDashboard";
import { useHistory } from "react-router-dom";


function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [message, setMessage] = useState("");
  const history = useHistory();

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch(
        "http://127.0.0.1:8080/http://f29c-111-119-178-142.ngrok.io/api/v1/users",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
          }),
        }
      );
      let resJson = await res.json();
      if (res.status === 201) {
        alert("account created");
        history.push("/dashboard");
          
         
        
      } else {
        //setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div id="sign-in">
      <Box>
        <icon id="icon1">
          <LockSharpIcon />
        </icon>
        <h3>Sign up</h3>
        <form autoComplete="on" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="first name"
            value={firstName}
            required
            autoFocus
            onChange={(e) => setFirstName(e.target.value)}
          ></input>

          <input
            type="text"
            placeholder="last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          ></input>
          <input
            id="email"
            class="no-outline"
            type="email"
            placeholder="Email*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          ></input>

          <input
            type="password"
            placeholder="Password*"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          ></input>
          <input
            type="password"
            placeholder="Confirm Password*"
            value={password}
            // onChange={(e) => setConfirmPassword(e.target.value)}
            required
          ></input>
          {/* <FormControlLabel
            className="check-box-button"
            control={<Checkbox defaultChecked />}
            label="Admin "
          />

          <FormControlLabel
            className="check-box-button"
            control={<Checkbox defaultChecked />}
            label="User"
          /> */}
          <Link to="/dashboard">
            <input
              id="button"
              type="button"
              value="Confirm"
              onClick={handleSubmit}
            ></input>
          </Link>

          {/* <div id="label">
            <label>Forgot password</label>
            <label>Create an account</label>
          </div> */}
        </form>
      </Box>
    </div>
  );
}

export default SignUp;
