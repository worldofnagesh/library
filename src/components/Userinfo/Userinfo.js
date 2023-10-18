import {React, useState, useEffect  } from 'react';
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';


function Userinfo() {
  
  const [posts, setPosts] = useState([]);
  const [emailId, setEmailId] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();
  const [isValid, setIsValid] = useState(true);
  
  // const changeEmailId = (event) => {
  //   setEmailId(event.target.value);
  // };
  const changeEmailId = (event) => {
    const inputEmail = event.target.value;
    setEmailId(inputEmail);
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (emailRegex.test(inputEmail)) {
      setIsValid('');
    } else {
      setIsValid('* Please enter a valid email.');
    }
  };

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/v1/students/'+id)
      .then((result) => {
        console.log("result",result.data);
        setPosts(result.data);
        setEmailId(result.data.emailId)
      })
      .catch((error) => console.log(error));
  }, []);

  const updateUser = () => {
    if(isValid!="") {
      alert("Invalid Details")
    }
    else{
    const formDetails = {id:posts.id,emailId:emailId};
        console.log("puting", formDetails)
        axios.put('http://localhost:8080/api/v1/studentinfo/'+posts.id, formDetails)
          .then(function () {
            alert('Info Successfully Updated');
            navigate('/menu/'+id);
            
          })
          .catch(function (error) {
            alert("Invalid Credentials, Please enter valid username or password");
            console.log("try again",error);
          });
 
  }};


  return (
    
    <div className="App">
    <div class="container">
    <div class="PageHeading">MAYBANK LIBRARY</div>
    <h4>USER INFO</h4>
    <div class="form-group">
                <label style={{margin:"5px" , paddingLeft:"80px"}} for="idnumber">Username </label>
                <input type="text" id="idnumber" name="idnumber" value={posts.id} readOnly/>
            </div><br></br>
            <div class="form-group">
               <label style={{margin:"5px" , paddingLeft:"80px"}} for="fullname">Full Name</label>
                <input type="text" id="fullname" name="fullname" value={posts.fullName} readOnly/>
            </div><br></br>
            <div class="form-group">
                <label style={{margin:"5px" , paddingLeft:"110px"}} for="email">Email</label>
               <a  contentEditable="true"><input type="email" id="email" name="email" value={emailId} onChange={changeEmailId}/></a>
               <div><p style={{fontSize:'10px' ,color:'#e62a1d',marginTop:'0',paddingLeft:"180px"}}><div >{isValid}</div>
            </p></div>
            </div><br></br>
            <div class="form-group"> 
                <button style={{backgroundColor:"#6492ea", border:"0", width:"120px"}} type="save" onClick={updateUser} >save</button>
            </div>
        </div><br></br>
        </div>
    
  );
}

export default Userinfo;
