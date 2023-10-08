import React, { useState } from 'react';
import './Login.scss';
import PageHeading from '../PageHeading';
import { useNavigate } from "react-router";
import axios from "axios";


function Login() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  

  const changeid = (event) => {
    setId(event.target.value);
  };

  const changepassword = (event) => {
    setPassword(event.target.value);
  }
  const login = () => {

    if (id=="") {
        alert("enter a user name")
    }
    else if (password=="") {
        alert("Please enter a password")
    }else {
        const formDetails = {id:id, password:password};
        console.log("posting", formDetails)
        axios.post('http://localhost:8080/api/v1/students/login', formDetails)
          .then(function (response) {
            if(201 == response.status){
                navigate('/home/'+id);
                console.log("valid credentials")
            }else if(401 == response.status){
                console.log("Invalid Credentials...");
                alert("Invalid Credentials...");
            }

          })
          .catch(function (error) {
            alert("Invalid Credentials,Please enter valid username or password");
            console.log("try again",error);
          });
    } 
}

  return (
    <div className="component-second">
      <div className="loginpage">
        <div className="container">
          <PageHeading />
          <div>
            <div className="form-group">
              <label style={{ margin: "5px" }} htmlFor="id">
                Username
              </label>
              <input
                type="text"
                id="id"
                name="id"
                value={id}
                onChange={changeid}
                required
              />
            </div>
            <div className="form-group">
              <label style={{ margin: "5px" }} htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={changepassword}
                required
              />
            </div>
            <div className="form-group">
              <button
                style={{ backgroundColor: "#6492ea", border: "0", width: "70px", height: "25px" }}
                type="submit"
                onClick={login}
              >
                Login
              </button>
            </div>
            <div className="form-group2">
              <a className="link" href="http://localhost:3000/forgotpassword">
                Forgot password?
              </a>
            </div>
            <div className="form-group2">
              Don't have an account?
              <a className="link" href="http://localhost:3000/register"><u>Register</u></a>
            </div>
            <div className="form-group2">
              Admin?
              <a href="http://localhost:3000/adminlogin" className="link"><u>Login</u></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
