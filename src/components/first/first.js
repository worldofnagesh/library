import React, {Component} from 'react';
// import './first.scss'
import { withRouter } from '../../withRouter';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as firstActions from "../../store/first/actions";
export class first extends Component {
    constructor(props) {
        super(props);
        this.second=this.second.bind(this);
        this.state = {};
    }
    second(){
      this.props.navigate("/second")
    }
    render() {
      return <div className="component-first">
        <h><u>MayBank Library</u></h>
        <label>ID Number</label>
        <form ><p>1. Please select your favorite Web language:</p>
            <div> <input type="radio" id="html" name="fav_language" value="HTML"></input>
            <label for="html">HTML</label><br></br>
           

            <input type="radio" id="css" name="fav_language" value></input>
            <label for="css">CSS</label><br></br>

            <input type="radio" id="javascript" name="fav_language" value="JavaScript"></input>
            <label for="javascript">JavaScript</label>
            </div>
            
  

             <br></br>

  
             <p>2. Please select your age:</p>
             <input type="radio" id="age1" name="age" value="30"></input>
             <label for="age1">0 - 30</label><br></br>
             <input type="radio" id="age2" name="age" value="60"></input>
             <label for="age2">31 - 60</label><br></br>
             <input type="radio" id="age3" name="age" value="100"></input>
             <label for="age3">61 - 100</label><br></br><br></br>
             <input type='button' onClick={this.second} value="submit"/></form>
        
        </div>;
    }
}
export default withRouter(first);

// export class welcome extends Component {
//   constructor(props) {
//       super(props);
//       this.basicinfo = this.basicinfo.bind(this);
//       // this.firstquestion = this.firstquestion.bind(this);
//       this.state = {};
//   }
//   basicinfo() {
//     this.props.navigate("/basicinfo")
//   }
//   render() {
//     return <div className="component-welcome">
//       Welcome to Online Exam...
//     Please Click on Start-Test Button to Start the Test...All the best. 
//     <br/>
//     Please Start test &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//     <input type="button" onClick={this.basicinfo} value="Start Test" />
//       </div>;
//   }
// }
// export default withRouter(welcome);

// export default connect(
//     ({ first }) => ({ ...first }),
//     dispatch => bindActionCreators({ ...firstActions }, dispatch)
//   )( first );