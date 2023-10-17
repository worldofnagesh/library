import React from "react";
import { useEffect, useState } from "react"
import axios from "axios";
import { useParams } from 'react-router-dom';

function Duebooks() {
  
  const { id } = useParams();
  const [dbpost, setDbposts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/duebooks/"+id)
      .then((result) => {
        console.log(result.data);
        setDbposts(result.data);
      })
      .catch((error) => console.log(error));
  }, []); 

  return (
    <div className="container">
      <div class="PageHeading">MAYBANK LIBRARY</div>
      <div class="SubHeading">DUE BOOKS</div>
      <div style={{marginRight:"10px", marginLeft:"10px"}}>
      <table style={{marginRight:"10px"}}class="center">
        <tr>
            <th>Name</th>
            <th>ID Number</th>
            <th>Due Date</th>
        </tr>
        {dbpost.map((book) => {
          return (
          <tr>
            <td>{book.bookId}</td>
            <td>{book.bookName}</td>
            <td>{book.dueDate}</td> 
        </tr>)
        })}
      </table>
      </div>
    </div>
  );
}

export default Duebooks;
