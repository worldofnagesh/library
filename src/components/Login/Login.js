import React, {Component} from 'react';
import './Login.scss'
import { withRouter } from '../../withRouter';
import PageHeading from '../PageHeading';

export class Login extends Component {
    changeUserName(event) {  
        this.setState({  
            userName: event.target.value
        });  
      }
      changePassword(event) {  
        this.setState({  
            passWord: event.target.value
        });  
      }
      login = () => {
        if (this.state.userName=="MAYBANK" && this.state.passWord=="LIBRARY") {
          alert("Login Sucessful")
          this.props.navigate("/")
        } else {
          alert("Invalid Credentials...")
        }
      }
    constructor(props) {
        super(props);
        this.login=this.login.bind(this);
        this.state = {
            userName:'',
            passWord:''
        };
    }
    render() {
      return <div className="component-second">
        <div className = "loginpage">
        
        <div class="container">
        <PageHeading></PageHeading>
        <form>
            <div class="form-group">
                <label style={{margin:"5px"}} for="username">Username  </label>
                <input type="text" id="username" name="username" value={this.state.userName} 
                 onChange={this.changeUserName.bind(this)} required/>
            </div>
            <div class="form-group">
                <label style={{margin:"5px"}} for="password">Password  </label>
                <input type="password" id="password" name="password" value={this.state.passWord}
                   onChange={this.changePassword.bind(this)} required/>
            </div>
            <div class="form-group">
                <button style={{backgroundColor:"#6492ea", border:"0", width:"70px"}} type="submit" onClick={this.login}>Login</button>
            </div>
            <div class="form-group2">
                <a class="link" href="http://localhost:3000/forgotpassword">Fogot password?</a>
            </div>
            <div class="form-group2">
                Don't have an account?<a class="link" href='http://localhost:3000/register'><u>Register</u></a>
            </div>
            <div class="form-group2">
                Admin?<a href="http://localhost:3000/adminlogin" class="link"><u>Login</u></a>
            </div>

        </form>
        
         </div>
        </div>
      
    </div>;
    }
}
export default withRouter(Login);