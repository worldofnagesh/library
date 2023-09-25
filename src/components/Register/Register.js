import React, {Component} from 'react';
import { withRouter } from '../../withRouter';
import PageHeading from '../PageHeading';
import StateDropdown from '../StateDropdown';
import GenderRadioButtons from '../Gender';

export class Register extends Component {
    changeIdNumber(event) {  
        this.setState({  
            idNumber: event.target.value
        });  
      }
      changeFullName(event) {  
        this.setState({  
            fullName: event.target.value
        });  
      }
      changeEmail(event) {  
        this.setState({  
            email: event.target.value
        });  
      }
      changeDateOfBirth(event){
        this.setState({
            dateOfBirth: event.target.value
        })
      }
      handleGenderChange(event){
        this.setState({
          selectedGender: event.target.value
        });
      };
    changePassword(event) {   
        this.setState({  
            passWord: event.target.value
        });  
      }
    changeConfirmPassword(event) {  
        this.setState({  
            confirmPassword: event.target.value
        });  
      }
    Register = () => {
        if (this.state.idNumber=="123456" && this.state.passWord=="ADMIN" && this.state.dateOfBirth=="2001-01-01" && this.state.passWord==this.state.confirmPassword && this.state.selectedGender=="male") {
          alert("Successfully Registered")
          this.props.navigate("/")
        } else {
          alert("Invalid Credentials...")
        }
      }
    constructor(props) {
        super(props);
        this.Register=this.Register.bind(this);
        this.state = {
            idNumber:'',
            fullName:'',
            email:'',
            dateOfBirth:'',
            passWord:'',
            confirmPassword:'',
            selectedGender:''    
        };
    }
    render() {
      return <div className="component-first">
        <div class="container">
        <PageHeading/>
        
        <form>
            <div style={{marginBottom:"2px",marginTop:"-20px"}} className="SubHeading">
            <p>Register to borrow books</p>
            </div>
            <div class="form-group">
                <label style={{margin:"5px" , paddingLeft:"60px"}} for="idnumber">ID Number  </label>
                <input type="text" id="idnumber" name="idnumber" value={this.state.idNumber} 
                 onChange={this.changeIdNumber.bind(this)} required/>
            </div>
            <div class="form-group">
                <label style={{margin:"5px" , paddingLeft:"65px"}} for="fullname">Full Name  </label>
                <input type="text" id="fullname" name="fullname" value={this.state.fullName} 
                 onChange={this.changeFullName.bind(this)} required/>
            </div>
            <div class="form-group">
                <label style={{margin:"5px" , paddingLeft:"100px"}} for="email">Email  </label>
                <input type="text" id="email" name="email" value={this.state.email} 
                 onChange={this.changeEmail.bind(this)} required/>
            </div>
            <div class="form-group">
               <label style={{margin:"5px" , paddingLeft:"45px"}} for="dateofbirth">Date of Birth</label>
               <input  style={{width:"160px"}} type="date" id='dateofbirth' name='dateofbirth' value={this.state.dateOfBirth}
                onChange={this.changeDateOfBirth.bind(this)} required/>
            </div>
            <div class="form-group">
              <label style={{margin:"5px" , paddingLeft:"20px"}} for="gender">Gender</label>
              <label >
                <input type="radio"  value="male" onChange={this.handleGenderChange.bind(this)} name="gender"/>Male
              <input type="radio"  value="female" onChange={this.handleGenderChange.bind(this)} name="gender"/>Female</label>
            </div>
            <div class="form-group">
              <StateDropdown></StateDropdown>
            </div>
            <div class="form-group">
                <label style={{margin:"5px" ,paddingLeft:"60px"}} for="password">Password  </label>
                <input type="password" id="password" name="password" value={this.state.passWord}
                   onChange={this.changePassword.bind(this)} required/>
            </div>
            <div class="form-group">
                <label style={{margin:"5px"}} for="confirmpassword">Confirm Password  </label>
                <input type="text" id="confirmpassword" name="confirmpassword" value={this.state.confirmPassword} 
                 onChange={this.changeConfirmPassword.bind(this)} required/>
            </div>
            <div class="form-group">
                <button style={{backgroundColor:"#6492ea", border:"0", width:"70px", height:"25px"}} type="submit" onClick={this.Register}>Register</button>
            </div>

        </form>
        
         </div>
        </div>;
    }
}
export default withRouter(Register);
