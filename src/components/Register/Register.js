import React, {Component} from 'react';
import { withRouter } from '../../withRouter';
import PageHeading from '../PageHeading';

export class Register extends Component {
    constructor(props) {
        super(props);
        this.first=this.first.bind(this);
        this.state = {};
    }
    first(){
      this.props.navigate("/")
    }
    render() {
      return <div className="component-first">
        <div class="container">
        <PageHeading/>
        
        <form>
            <div className="SubHeading">
            <p>Register to borrow books</p>
            </div>
            {/* <div class="form-group">
                <label style={{margin:"5px"}} for="username">Username  </label>
                <input type="text" id="username" name="username" value={this.state.userName} 
                 onChange={this.changeUserName.bind(this)} required/>
            </div>
            <div class="form-group">
                <label style={{margin:"5px"}} for="password">Password  </label>
                <input type="password" id="password" name="password" value={this.state.passWord}
                   onChange={this.changePassword.bind(this)} required/>
            </div> */}
            <div class="form-group">
                <button style={{backgroundColor:"#6492ea", border:"0", width:"70px"}} type="submit" onClick={this.first}>Register</button>
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
export default withRouter(Register);
