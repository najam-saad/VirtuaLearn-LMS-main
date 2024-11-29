import LockSharpIcon from "@mui/icons-material/LockSharp";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import { flexbox } from "@mui/system";
import "./SignIn.scss"
import {useState} from "react"
import { useHistory } from "react-router-dom";

function SignIn() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [message, setMessage] = useState("");
  const history = useHistory();

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch(
        "http://127.0.0.1:8080/http://f29c-111-119-178-142.ngrok.io/api/v1/users/login",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
           
            email: email,
            password: password,
          }),
        }
      );
      let resJson = await res.json();
      if (res.status === 200 ) {
        console.log( resJson.data.user.role);
        if( resJson.data.user.role === true)
        {
          history.push("/dashboard");
        }
        else if( resJson.data.user.role === false){
          history.push("/admin-dashboard");
        }
       
          
         
        
      } else {
       alert("invalid data");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (

    <div id="sign-in">
      
      <Box
       
      >
        <icon id="icon1">
          <LockSharpIcon />
        </icon>
        <h3>Sign in</h3>
        <form autoComplete="on" onSubmit={handleSubmit}>
          <input id ="email" class="no-outline" type="email" placeholder="Email*"  value={email} required autoFocus onChange={(e) => setEmail(e.target.value)}></input>
          <input type="password" placeholder="Password*" required  value={password}
            onChange={(e) => setPassword(e.target.value)}></input>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Remember Me"
          />
          <input id ="button" type="button" value="SIGN IN" onClick={handleSubmit}></input>
          <div id="label">
          <label>Forgot password</label>
          <label>Create an account</label>
          </div>
        </form>
      </Box>
    </div>
  );
}

export default SignIn;
