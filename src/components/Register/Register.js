import React, { useState } from 'react';
import axios from 'axios';
import { withRouter } from '../../withRouter';
import PageHeading from '../PageHeading';
import StateDropdown from '../StateDropdown';
import { signUp } from '../Servers/user-servise';
import {Routes, Route, useNavigate} from 'react-router-dom';


function Register(props) {
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

export default withRouter(Register);
// import React, {Component} from 'react';
// import { withRouter } from '../../withRouter';
// import PageHeading from '../PageHeading';
// import StateDropdown from '../StateDropdown';
// import GenderRadioButtons from '../Gender';
// import axios from "axios";

// export class Register extends Component {
//     changeIdNumber(event) {  
//         this.setState({  
//             id: event.target.value
//         });  
//       }
//       changeFullName(event) {  
//         this.setState({  
//             fullName: event.target.value
//         });  
//       }
//       changeEmail(event) {  
//         this.setState({  
//             emailId: event.target.value
//         });  
//       }
//       changeDateOfBirth(event){
//         this.setState({
//             dob: event.target.value
//         })
//       }
//       handleGenderChange(event){
//         this.setState({
//           gender: event.target.value
//         });
//       };
//     changePassword(event) {   
//         this.setState({  
//             password: event.target.value
//         });  
//       }
//     changeConfirmPassword(event) {  
//         this.setState({  
//             confirmPassword: event.target.value
//         });  
//       }
    // Register = () => {
    //     if (this.state.id=="123456" && this.state.password=="ADMIN" && this.state.dob=="2001-01-01" && this.state.password==this.state.confirmPassword && this.state.gender=="male") {
    //       alert("Successfully Registered")
    //       this.props.navigate("/")
    //     } else {
    //       alert("Invalid Credentials...")
    //     }
    //   }
      
//       handleRegister = async () => {
//         try {
//             response = await axios.post("/api/v1/students", {
//               id,
//               fullName,
//               emailId,
//               dob,
//               password,
//               confirmPassword,
//               gender 
//             });
//             alert("Successfully Registered")
            
//             // Handle successful login, store the token, redirect, etc.
//         } catch (error) {
//           alert("Invalid Credentials...")
//             // Handle login error, display an error message, etc.
//         }
//       }

//     constructor(props) {
//         super(props);
//         this.handleRegiter=this.handleRegiter.bind(this);
//         this.state = {
//             id:'',
//             fullName:'',
//             emailId:'',
//             dob:'',
//             password:'',
//             confirmPassword:'',
//             gender:''    
//         };
//     }
//     render() {
//       return <div className="component-first">
//         <div class="container">
//         <PageHeading/>
        
//         <form>
//             <div style={{marginBottom:"2px",marginTop:"-20px"}} className="SubHeading">
//             <p>Register to borrow books</p>
//             </div>
//             <div class="form-group">
//                 <label style={{margin:"5px" , paddingLeft:"60px"}} for="idnumber">ID Number  </label>
//                 <input type="text" id="idnumber" name="idnumber" value={this.state.id} 
//                  onChange={this.changeIdNumber.bind(this)} required/>
//             </div>
//             <div class="form-group">
//                 <label style={{margin:"5px" , paddingLeft:"65px"}} for="fullname">Full Name  </label>
//                 <input type="text" id="fullname" name="fullname" value={this.state.fullName} 
//                  onChange={this.changeFullName.bind(this)} required/>
//             </div>
//             <div class="form-group">
//                 <label style={{margin:"5px" , paddingLeft:"100px"}} for="email">Email  </label>
//                 <input type="text" id="email" name="email" value={this.state.emailId} 
//                  onChange={this.changeEmail.bind(this)} required/>
//             </div>
//             <div class="form-group">
//                <label style={{margin:"5px" , paddingLeft:"45px"}} for="dateofbirth">Date of Birth</label>
//                <input  style={{width:"160px"}} type="date" id='dateofbirth' name='dateofbirth' value={this.state.dob}
//                 onChange={this.changeDateOfBirth.bind(this)} required/>
//             </div>
//             <div class="form-group">
//               <label style={{margin:"5px" , paddingLeft:"20px"}} for="gender">Gender</label>
//               <label >
//                 <input type="radio"  value="male" onChange={this.handleGenderChange.bind(this)} name="gender"/>Male
//               <input type="radio"  value="female" onChange={this.handleGenderChange.bind(this)} name="gender"/>Female</label>
//             </div>
//             <div class="form-group">
//               <StateDropdown></StateDropdown>
//             </div>
//             <div class="form-group">
//                 <label style={{margin:"5px" ,paddingLeft:"60px"}} for="password">Password  </label>
//                 <input type="password" id="password" name="password" value={this.state.password}
//                    onChange={this.changePassword.bind(this)} required/>
//             </div>
//             <div class="form-group">
//                 <label style={{margin:"5px"}} for="confirmpassword">Confirm Password  </label>
//                 <input type="text" id="confirmpassword" name="confirmpassword" value={this.state.confirmPassword} 
//                  onChange={this.changeConfirmPassword.bind(this)} required/>
//             </div>
//             <div class="form-group">
//                 <button style={{backgroundColor:"#6492ea", border:"0", width:"70px", height:"25px"}} type="submit" onClick={this.handleRegister}>Register</button>
//             </div>

//         </form>
        
//          </div>
//         </div>;
//     }
// }
// export default withRouter(Register);
