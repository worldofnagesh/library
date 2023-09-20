import React, {Component} from 'react';
import { withRouter } from '../../withRouter';
import PageHeading from '../PageHeading';

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
    login = () => {
        if (this.state.idNumber=="123456" && this.state.passWord=="ADMIN" && this.state.dateOfBirth=="2023-09-20" && this.state.passWord==this.state.confirmPassword) {
          alert("Sucessfully updated")
          this.props.navigate("/")
        } else {
          alert("Invalid Credentials...")
        }
      }
    constructor(props) {
        super(props);
        this.login=this.login.bind(this);
        this.state = {
            idNumber:'',
            fullName:'',
            email:'',
            dateOfBirth:'',
            passWord:'',
            confirmPassword:''
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
                <label style={{margin:"5px" , paddingLeft:"80px"}} for="idnumber">ID Number  </label>
                <input type="text" id="idnumber" name="idnumber" value={this.state.idNumber} 
                 onChange={this.changeIdNumber.bind(this)} required/>
            </div>
            <div class="form-group">
                <label style={{margin:"5px" , paddingLeft:"80px"}} for="fullname">Full Name  </label>
                <input type="text" id="fullname" name="fullname" value={this.state.fullName} 
                 onChange={this.changeFullName.bind(this)} required/>
            </div>
            <div class="form-group">
                <label style={{margin:"5px" , paddingLeft:"80px"}} for="email">Email  </label>
                <input type="text" id="email" name="email" value={this.state.email} 
                 onChange={this.changeEmail.bind(this)} required/>
            </div>
            <div class="form-group">
               <label style={{margin:"5px" , paddingLeft:"75px"}} for="dateofbirth">Date of Birth</label>
               <input  style={{width:"160px"}} type="date" id='dateofbirth' name='dateofbirth' value={this.state.dateOfBirth}
                onChange={this.changeDateOfBirth.bind(this)} required/>
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
                <button style={{backgroundColor:"#6492ea", border:"0", width:"70px"}} type="submit" onClick={this.first}>Register</button>
            </div>

        </form>
        
         </div>
        </div>;
    }
}
export default withRouter(Register);
