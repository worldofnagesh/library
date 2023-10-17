import React, { useState } from 'react';
import { useNavigate } from "react-router";

import PageHeading from '../PageHeading';

function AdminLogin() {
  const [userName, setUserName] = useState('');
  const [passWord, setPassWord] = useState('');
  const navigate = useNavigate();

  const changeUserName = (event) => {
    setUserName(event.target.value);
  };

  const changePassword = (event) => {
    setPassWord(event.target.value);
  };

  const AddBook = () => {
    if (userName === "MAYBANK" && passWord === "Admin@123") {
      alert("Login Successfully, Add Book");
      navigate("/addbook");
    } else {
      alert("Invalid Credentials...");
    }
  };

  return (
    <div className="component-first">
      <div className="container">
        <PageHeading />
        <div>
          <div className="form-group">
            <label style={{ margin: "5px" }}>Username </label>
            <input
              type="text"
              id="username"
              name="username"
              value={userName}
              onChange={changeUserName}
              required
            />
          </div>
          <div className="form-group">
            <label style={{ margin: "5px" }}>Password </label>
            <input
              type="password"
              id="password"
              name="password"
              value={passWord}
              onChange={changePassword}
              required
            />
          </div>
          <div className="form-group">
            <button
              style={{ backgroundColor: "#6492ea", border: "0", width: "100px" }}
              type="button"
              onClick={AddBook}
            >
              Admin Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
