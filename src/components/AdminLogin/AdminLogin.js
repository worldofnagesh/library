import React, {Component} from 'react';
import { withRouter } from '../../withRouter';
import PageHeading from '../PageHeading';

export class AdminLogin extends Component {
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
      AddBook = () => {
        if (this.state.userName=="MAYBANK" && this.state.passWord=="ADMIN") {
          alert("Credentials Add Book")
          this.props.navigate("/addbook")
        } else {
          alert("Invalid Credentials...")
        }
      }
      constructor(props) {
        super(props);
        this.AddBook=this.AddBook.bind(this);
        this.state = {
            userName:'',
            passWord:''
        };
    }
    render() {
      return <div className="component-first">
        <div class="container">
        <PageHeading/>
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
                <button style={{backgroundColor:"#6492ea", border:"0", width:"100px"}} type="submit" onClick={this.AddBook}>Admin Login</button>
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
export default withRouter(AdminLogin);