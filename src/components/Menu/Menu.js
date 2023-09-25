import React from "react";
import {Routes, Route, useNavigate} from 'react-router-dom';


function Menu() {
    const navigate = useNavigate();
    const duebook = () => {
      navigate('/duebooks');
    };

    const userinfo = () => {
        navigate('/userinfo');
    }
    const logout = () => {
        alert("Logout Sucessful")
        navigate('/');
      };

  return (
    <div className="container">
      <div class="PageHeading">MAYBANK LIBRARY</div>
      <div class="Buttongroup">
      <button class="btn duebooks" onClick={duebook}>Due Books</button>
      <br></br>
      <button class="btn userinfo" onClick={userinfo}>User Info</button>
      <br></br>
      <button class="btn logout" onClick={logout}>Logout</button>
      </div>
    </div>

    
  );
}

export default Menu;
