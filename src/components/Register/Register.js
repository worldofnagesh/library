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
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const [validationError, setValidationError] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [inputError, setInputError] = useState('');
  const [validPassword, setValidPassword] = useState('');
  const [state, setState] = useState('');

  // var state = sessionStorage.getItem("statename");
  const handleDataFromChild = (data) => {
    setState(data);
  };
  const changeId = (event) => {
    const value = event.target.value;
    setId(value);
    const regex = /^\d{6}$/;
    if (!regex.test(value)) {
      setValidationError('*Please enter a six-digit number');
    } else {
      setValidationError('');
    }
  };

  const changeFullName = (event) => {
    const value = event.target.value;
    setFullName(value);
    const regex = /^.+$/;
    if (regex.test(value)) {
      setInputError('');
    } else {
      setInputError('*Full name should not be empty');
    }
  }

  const changeEmailId = (event) => {
    const inputEmail = event.target.value;
    setEmailId(inputEmail);
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (emailRegex.test(inputEmail)) {
      setIsValid('');
    } else {
      setIsValid('* Please enter a valid email.');
    }
  };

  const changeDob = (event) => {
    const selectedDate = new Date(event.target.value);
    const currentDate = new Date();
    if (selectedDate <= currentDate) {
      setDob(event.target.value);
    } else {
      alert('Selected date should be less than or equal to the current date.');
    }
  }

  const changeGender = (event) => {
    setGender(event.target.value);
  };

  const changePassword = (event) => {
    // setPassword(event.target.value);
    const inputPassword = event.target.value;
    setPassword(inputPassword);
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (passwordRegex.test(inputPassword)) {
      setValidPassword('');
    } else {
      setValidPassword('*Password must be at least eight characters, including at least one uppercase letter, one lowercase letter, one number, and one special character.');
    }
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
    else if (state=="") {
      alert("Please select state")
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
    else if ((validationError != "")||(isValid!="")||(inputError!="")||(validPassword!="")) {
      alert("Invalid Details")
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
              type="text"
              id="idnumber"
              name="idnumber"
              placeholder='enter six digit roll number'
              value={id}
              onChange={changeId}
              required
            />
            <div>
              <p style={{fontSize:'10px' ,color:'#e62a1d',marginTop:'0',paddingLeft:"180px"}}> <div>{validationError}</div></p>
            </div>
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
            <div>
              <p style={{fontSize:'10px' ,color:'#e62a1d',marginTop:'0',paddingLeft:"180px"}}><div>{inputError}</div></p>
            </div>
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
            <div><p style={{fontSize:'10px' ,color:'#e62a1d',marginTop:'0',paddingLeft:"180px"}}><div >{isValid}</div>
            </p></div>
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
            <StateDropdown sendDataToParent={handleDataFromChild}></StateDropdown>
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
            <div><p style={{fontSize:'10px' ,color:'#e62a1d',marginTop:'0',paddingLeft:"180px"}}><div >{validPassword}</div>
            </p></div>
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
