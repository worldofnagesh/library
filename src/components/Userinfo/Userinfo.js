import React from "react";
import { useState } from 'react';

function ValidateEmail()
{
if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("email").value))
//if(/\S+@\S+\.\S+/.test(document("email").value))
  {
    alert("Value successfully updated!")
    return (true)
  }

  
  //  else if(document.getElementsById("email").value==(document.getElementsByName("email").defaultValue)){
  //  alert("You have entered the same email address, please enter new email address");
  //  }
   
    alert("You have entered an invalid email address!")
    return (false)
}

function Userinfo() {
  return (
    
    <div className="App">
    <div class="container">
    <div class="PageHeading">MAYBANK LIBRARY</div>
    <h4>USER INFO</h4>
    <div class="form-group">
                <label style={{margin:"5px" , paddingLeft:"80px"}} for="idnumber">ID Number </label>
                <input type="text" id="idnumber" name="idnumber" value="7334" readOnly/>
            </div><br></br>
            <div class="form-group">
               <label style={{margin:"5px" , paddingLeft:"80px"}} for="fullname">Full Name</label>
                <input type="text" id="fullname" name="fullname" value="Soundar Subbiah" readOnly/>
            </div><br></br>
            <div class="form-group">
                <label style={{margin:"5px" , paddingLeft:"110px"}} for="email">Email</label>
               <a  contentEditable="true"><input type="email" id="email" name="email" defaultValue="soundarsubbu@gmail.com"/></a>
            </div><br></br>
            <div class="form-group"> 
                <button style={{backgroundColor:"#6492ea", border:"0", width:"120px"}} type="save" onClick={ValidateEmail} >save</button>
            </div>
        </div><br></br>
        </div>
    
  );
}

export default Userinfo;
