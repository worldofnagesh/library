import React, {Component} from 'react';
import './second.scss'
import { withRouter } from '../../withRouter';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as firstActions from "../../store/first/actions";

export class second extends Component {
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
        <div class="heading">MAY LIBRARY</div>
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
                <a href=" " class="link">Fogot password?</a>
            </div>
            <div class="form-group2">
                Don't have an account?<a class="link" href=''><u>Register</u></a>
            </div>
            <div class="form-group2">
                Admin?<a href=" " class="link"><u>Login</u></a>
            </div>

        </form>
         </div>
        </div>
      
    </div>;
    }
}
export default withRouter(second);