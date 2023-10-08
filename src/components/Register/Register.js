import React, { useState } from 'react';
import PageHeading from '../PageHeading';
import StateDropdown from '../StateDropdown';
import { signUp } from '../Servers/user-servise';
import {useNavigate} from 'react-router-dom';


function Register() {
  const [formData, setFormData] = useState({
    id: '',
    fullName: '',
    emailId: '',
    dob: '',
    gender: '',
    password: '',
    state: '',
  });
  const navigator = useNavigate();

  const changeField = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };
  

  const handleRegister = async () => {
    try {
      signUp(formData).then((resp)=>{
         console.log(resp)
         console.log("success---")
         navigator('/');
         

      })
    } catch (error) {
      alert('Invalid Credentials...');
      navigator('/');
    }
  };

  return (
    <div className="component-first">
      <div className="container">
        <PageHeading />
        <form>
          <div style={{ marginBottom: '2px', marginTop: '-20px' }} className="SubHeading">
            <p>Register to borrow books</p>
          </div>
          <div className="form-group">
            <label style={{ margin: '5px', paddingLeft: '60px' }} htmlFor="idnumber">
              ID Number{' '}
            </label>
            <input
              type="text"
              id="idnumber"
              name="idnumber"
              value={formData.id}
              onChange={(e) => changeField('id', e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label style={{ margin: '5px', paddingLeft: '65px' }} htmlFor="fullname">
              Full Name{' '}
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              value={formData.fullName}
              onChange={(e) => changeField('fullName', e.target.value)}
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
              value={formData.emailId}
              onChange={(e) => changeField('emailId', e.target.value)}
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
              value={formData.dob}
              onChange={(e) => changeField('dob', e.target.value)}
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
                onChange={(e) => changeField('gender', e.target.value)}
                name="gender"
              />
              Male
              <input
                type="radio"
                value="female"
                onChange={(e) => changeField('gender', e.target.value)}
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
              value={formData.password}
              onChange={(e) => changeField('password', e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label style={{ margin: '5px' }} htmlFor="state">
              Confirm Password{' '}
            </label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={(e) => changeField('state', e.target.value)}
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
        </form>
      </div>
    </div>
  );
}

export default Register;
