import React, { useState } from 'react';
import PageHeading from '../PageHeading';
import StateDropdown from '../StateDropdown';
import {useNavigate} from 'react-router-dom';
import axios from "axios";


function Register() {
  const [id, setId] = useState('');
  const [fullName, setFullName] = useState('');
  const [emailId, setEmailId] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [state, setState] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const changeId = (event) => {
    setId(event.target.value);
  };

  const changeFullName = (event) => {
    setFullName(event.target.value);
  }
  const changeEmailId = (event) => {
    setEmailId(event.target.value);
  };

  const changeDob = (event) => {
    setDob(event.target.value);
  }
  const changeGender = (event) => {
    setGender(event.target.value);
  };

  const changeState= (event) => {
    setState(event.target.value);
  }
  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  const changeConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  }
  const handleRegister = () => {

    if ((id=="" )||(id<=99999)||(id>999999)) {
        alert("enter a valid six digit Id")
    }
    else if (fullName=="") {
      alert("Please enter a full name")
    }
    else if (emailId=="") {
      alert("Please enter email")
    }
    else if (dob=="") {
      alert("Please enter Date of Birth ")
    }
    else if (gender=="") {
      alert("Please select gender")
    }
    // else if (state=="") {
    //   alert("Please select state")
    // }
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
        const formDetails = {id:id,fullName:fullName, emailId:emailId, dob:dob, gender:gender, state:state, password:password};
        console.log("posting", formDetails)
        axios.post('http://localhost:8080/api/v1/students', formDetails)
          .then(function () {
                alert("Registered Successfully")
                navigate('/');
                console.log("valid credentials")
          })
          .catch(function (error) {
            alert("Invalid Credentials,Please enter valid username or password");
            console.log("try again",error);
          });
    }
  }  

  return (
    <div className="component-first">
      <div className="container">
        <PageHeading />
        <div>
          <div style={{ marginBottom: '2px', marginTop: '-20px' }} className="SubHeading">
            <p>Register to borrow books</p>
          </div>
          <div className="form-group">
            <label style={{ margin: '5px', paddingLeft: '60px' }} htmlFor="idnumber">
              ID Number
            </label>
            <input
              type="number"
              id="idnumber"
              name="idnumber"
              placeholder='enter six digit roll number'
              value={id}
              onChange={changeId}
              required
            />
          </div>
          <div className="form-group">
            <label style={{ margin: '5px', paddingLeft: '65px' }} htmlFor="fullname">
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              value={fullName}
              onChange={changeFullName}
              required
            />
          </div>
          <div className="form-group">
            <label style={{ margin: '5px', paddingLeft: '100px' }} htmlFor="email">
              Email{' '}
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={emailId}
              onChange={changeEmailId}
              required
            />
          </div>
          <div className="form-group">
            <label style={{ margin: '5px', paddingLeft: '45px' }} htmlFor="dateofbirth">
              Date of Birth
            </label>
            <input
              style={{ width: '160px' }}
              type="date"
              id="dateofbirth"
              name="dateofbirth"
              value={dob}
              onChange={changeDob}
              required
            />
          </div>
          <div className="form-group">
            <label style={{ margin: '5px', paddingLeft: '20px' }} htmlFor="gender">
              Gender
            </label>
            <label>
              <input
                type="radio"
                value="male"
                onChange={changeGender}
                name="gender"
              />
              Male
              <input
                type="radio"
                value="female"
                onChange={changeGender}
                name="gender"
              />
              Female
            </label>
          </div>
          <div className="form-group">
            <StateDropdown></StateDropdown>
          </div>
          <div className="form-group">
            <label style={{ margin: '5px', paddingLeft: '60px' }} htmlFor="password">
              Password{' '}
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={changePassword}
              required
            />
          </div>
          <div className="form-group">
            <label style={{ margin: '5px' }} htmlFor="state">
              Confirm Password{' '}
            </label>
            <input
              type="text"
              id="confirmpassword"
              name="confirmpassword"
              value={confirmpassword}
              onChange={changeConfirmPassword}
              required
            />
          </div>
          <div className="form-group">
            <button
              style={{ backgroundColor: '#6492ea', border: '0', width: '70px', height: '25px' }}
              type="submit"
              onClick={handleRegister}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
