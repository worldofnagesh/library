import React, { useState } from 'react';
import PageHeading from '../PageHeading';
import { useNavigate } from "react-router";
import axios from "axios";

function ForgotPassword() {
  const [id, setId] = useState('');
  const [dob, setDob] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const navigate = useNavigate();

  const changeid = (event) => {
    setId(event.target.value);
  };

  const changedob = (event) => {
    setDob(event.target.value);
  };

  const changepassword = (event) => {
    setPassword(event.target.value);
  };

  const changeConfirmpassword = (event) => {
    setConfirmpassword(event.target.value);
  };

  const login = () => {
    if (id=="") {
      alert("enter a user name")
    }
    else if (dob=="") {
      alert("Please enter Date of Birth ")
    }
    else if (password=="") {
      alert("Please enter a Password")
    }
    else if (confirmpassword=="") {
    alert("Please enter a Confirm Password")
    }
    else if (password != confirmpassword) {
      alert("confirm password is not matching")
    }
    else {
      const formDetails = {id:id,dob:dob,password:password};
        console.log("puting", formDetails)

        axios.put('http://localhost:8080/api/v1/students/'+id, formDetails)
          .then(function (response) {
            alert('Password Successfully Updated');
            navigate('/');
            
          })
          .catch(function (error) {
            alert("Invalid Credentials, Please enter valid username or date of birth");
            console.log("try again",error);
          });
    }
  };

  return (
    <div className="component-first">
      <div className="container">
        <PageHeading />
        <div>
          <div style={{ marginBottom: '40px', marginTop: '30px' }} className="SubHeading">
            <p>Trouble logging in?</p>
          </div>
          <div className="form-group">
            <label style={{ margin: '5px', paddingLeft: '80px' }} htmlFor="id">
              ID Number
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
            <label style={{ margin: '5px', paddingLeft: '75px' }} htmlFor="dob">
              Date of Birth
            </label>
            <input
              style={{ width: '160px' }}
              type="date"
              id="dob"
              name="dob"
              value={dob}
              onChange={changedob}
              required
            />
          </div>
          <div className="form-group">
            <label style={{ margin: '5px', paddingLeft: '60px' }} htmlFor="password">
              New password
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
            <label style={{ margin: '5px' }} htmlFor="confirmpassword">
              Confirm New password
            </label>
            <input
              type="text"
              id="confirmpassword"
              name="confirmpassword"
              value={confirmpassword}
              onChange={changeConfirmpassword}
              required
            />
          </div>
          <div className="form-group">
            <button
              style={{
                backgroundColor: '#6492ea',
                border: '0',
                width: '120px',
                height: '25px',
              }}
              type="submit"
              onClick={login}
            >
              Reset password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;

