import React from 'react';
import { useParams, useNavigate} from 'react-router-dom';


function Menu() {
    const navigate = useNavigate();
    const {id} = useParams(); 


    const duebook = () => {
      navigate('/duebooks/'+id);
    };

    const userinfo = () => {
        navigate('/userinfo/'+id);
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
