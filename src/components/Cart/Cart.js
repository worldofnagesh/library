import React from "react";
import { useEffect, useState } from "react"
import axios from "axios";
import { useParams } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';


function Cart() {
    const navigate = useNavigate();

    const [posts, setPosts] = useState([]);
    const { id } = useParams();



  const handleDelete = (bookId) => {
    axios.delete('http://localhost:8080/api/v1/cart/'+ bookId , 
      ).then(() => {
        window.location.reload(false);
      }).catch((error) => {
        console.log(error);
      })
  }

  const handleDeleteAll = () => {
    
    {posts.map((book) => {
      const bookToDuebooks = {
      id:id,
      bookId: book.bookId,
      bookName: book.bookName,
      dueDate: book.dueDate,
      };
    console.log("posting", bookToDuebooks)
    axios.post('http://localhost:8080/api/v1/duebooks', bookToDuebooks);
    })}
    

    axios.delete('http://localhost:8080/api/v1/cart')
      .then((response) => {
      alert("checkout successful")
      navigate('/home/'+id);
      console.log(response);    
      if( response.status == 201){
        console.log("valid credentials")}
      }).catch((error) => {
        console.log(error.response.data);
        console.log(error);
    })
  }

    useEffect(() => {
      axios
        .get("http://localhost:8080/api/v1/cart/"+id)
        .then((result) => {
          console.log(result.data);
          setPosts(result.data);
        })
        .catch((error) => console.log(error));
    }, []); 

     
    return (
        <div className="container">
        <div class="PageHeading">MAYBANK LIBRARY</div>
        <div class="SubHeading">CART</div>
        <div style={{marginRight:"10px", marginLeft:"10px"}}>
        <table id="user" style={{marginRight:"10px"}}class="center">
                <thead>
              <tr>
              <th>BookId</th>
              <th>BookName</th>
              <th>DueDate</th>
          </tr>
          </thead>
          {posts.map((user) => {
          return (
          <tr>
            <td>{user.bookId}</td>
            <td>{user.bookName}</td>
            <td>{user.dueDate}</td> 
            <td><div><button onClick={()=>handleDelete(user.bookId)}>Delete</button></div></td>
          </tr>)
          })}
        </table>
        </div>
          <br></br>
          <br></br>
        <div><button onClick={()=>handleDeleteAll()}>checkout</button></div>
        </div>
    );  
    

  
}

export default Cart;
