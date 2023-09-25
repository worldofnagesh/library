import React from "react";
import PageHeading from "../PageHeading";
import {Routes, Route, useNavigate} from 'react-router-dom';



function Cart() {
    const navigate = useNavigate();

    const checkout = () => {
      alert("Checkout Sucessful")
      navigate('/');
    };

  return (
    <div class="container">
      <PageHeading></PageHeading>
      <form>
      <table style={{marginLeft:"auto" , marginRight:"auto" }}>
        <tr class="columnheading">
            <th>Name</th>
            <th>ID Number</th>
            <th>Remove</th>
            <th>Due Date</th>
        </tr>
        <tr>
            <td>Megna</td>
            <td>7334</td>
            <td><a class="link" href=''>Del</a></td>
            <td>1 Jan 2023</td>
        </tr>
        <tr>
            <td>Kingsley</td>
            <td>7333</td>
            <td><a class="link" href=''>Del</a></td>
            <td>4 feb 2023</td>
        </tr>
       
        <tr>
            <td>Sourav</td>
            <td>7332</td>
            <td><a class="link" href=''>Del</a></td>
            <td>1 mar 2024</td>
        </tr>
    </table>
    <div>
    <button style={{backgroundColor:"#d1dab7", border:"0", width:"180px", height:"30px", marginTop: "50px",
  marginbottom: "50px"}} class="checkout" type="submit" onClick={checkout}>CHECKOUT</button>
    </div>
    </form>
    </div>
  );
}

export default Cart;
