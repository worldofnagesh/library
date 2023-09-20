import React, {Component} from 'react';
import { withRouter } from '../../withRouter';
import PageHeading from '../PageHeading';

export class ForgotPassword extends Component {
    changeIdNumber(event) {  
        this.setState({  
            idNumber: event.target.value
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
          this.props.navigate("/addbook")
        } else {
          alert("Invalid Credentials...")
        }
      }
    constructor(props) {
        super(props);
        this.login=this.login.bind(this);
        this.state = {
            idNumber:'',
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
           <div  className="SubHeading">
           <p>Trouble logging in?</p>
           </div>
            <div class="form-group">
                <label style={{margin:"5px" , paddingLeft:"80px"}} for="idnumber">ID Number  </label>
                <input type="text" id="idnumber" name="idnumber" value={this.state.idNumber} 
                 onChange={this.changeIdNumber.bind(this)} required/>
            </div>
            <div class="form-group">
               <label style={{margin:"5px" , paddingLeft:"75px"}} for="dateofbirth">Date of Birth</label>
               <input  style={{width:"160px"}} type="date" id='dateofbirth' name='dateofbirth' value={this.state.dateOfBirth}
                onChange={this.changeDateOfBirth.bind(this)} required/>
            </div>
            <div class="form-group">
                <label style={{margin:"5px" ,paddingLeft:"60px"}} for="password">New Password  </label>
                <input type="password" id="password" name="password" value={this.state.passWord}
                   onChange={this.changePassword.bind(this)} required/>
            </div>
            <div class="form-group">
                <label style={{margin:"5px"}} for="confirmpassword">Confirm New Password  </label>
                <input type="text" id="confirmpassword" name="confirmpassword" value={this.state.confirmPassword} 
                 onChange={this.changeConfirmPassword.bind(this)} required/>
            </div>
            <div class="form-group">
                <button style={{backgroundColor:"#6492ea", border:"0", width:"120px"}} type="submit" onClick={this.login}>Reset Password</button>
            </div>
            {/* <div class="form-group2">
                <a href=" " class="link">Fogot password?</a>
            </div>
            <div class="form-group2">
                Don't have an account?<a class="link" href='http://localhost:3000/second'><u>Register</u></a>
            </div>
            <div class="form-group2">
                Admin?<a href=" " class="link"><u>Login</u></a>
            </div> */}

        </form>
        
         </div>
        
        </div>;
    }
}
export default withRouter(ForgotPassword);