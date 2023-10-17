import React, { useState } from 'react';
import PageHeading from '../PageHeading';
import axios from "axios";

function AddBook() {
    
    const [bookName, setBookName] = useState('');
    const [authorName, setAuthorName] = useState('');
    const [dueDate, setDueDate] = useState('');

    const changeBookName = (event) => {
        setBookName(event.target.value);
    };

    const changeAuthorName = (event) => {
        setAuthorName(event.target.value);
    };

    const changeDueDate = (event) => {
        const selectedDate = new Date(event.target.value);
        const currentDate = new Date();
        if (currentDate <= selectedDate) {
          setDueDate(event.target.value);
        } else {
          alert('Selected date should be greater than or equal to the current date.');
        }
    }

    const saveBook = () => {
        if (bookName=="" ){
            alert("enter book name")
        } 
        else if (authorName=="") {
          alert("enter author name")
        }
        else if (dueDate=="") {
          alert("Please enter due date")
        }else {
            const postBook = {bookName:bookName,authorName:authorName, dueDate:dueDate};
            console.log("posting", postBook)
            axios.post('http://localhost:8080/api/v1/addbook', postBook)
              .then(function () {
                    alert("Submitted Successfully");
                    window.location.reload(false);
              })
              .catch(function (error) {
                alert("Invalid");
                console.log("try again",error);
              });
        }
    } 
    

  return (
    <div className="component-first">
      <div className="container">
        <PageHeading />
        <div className="SubHeading" style={{ marginLeft: '130px',width:"150px",height:"24px",fontSize:"15px"}}><p style={{paddingTop:"4px"}}>Add Book</p></div>
        <div>
          <div className="form-group">
            <label style={{ margin: '5px', paddingLeft: '65px' }} htmlFor="bookName">
              Book Name
            </label>
            <input
              type="text"
              id="bookName"
              name="bookName"
              value={bookName}
              onChange={changeBookName}
              required
            />
          </div>
          <div className="form-group">
            <label style={{ margin: '5px', paddingLeft: '50px' }} htmlFor="authorName">
              Author Name{' '}
            </label>
            <input
              type="text"
              id="authorName"
              name="authorName"
              value={authorName}
              onChange={changeAuthorName}
              required
            />
        </div>
          <div className="form-group">
            <label style={{ margin: '5px', paddingLeft: '80px' }} htmlFor="dueDate">
              Due Date
            </label>
            <input
              style={{ width: '160px' }}
              type="date"
              id="dueDate"
              name="dueDate"
              value={dueDate}
              onChange={changeDueDate}
              required
            />
          </div>
          <div className="form-group">
            <button
              style={{ backgroundColor: "#6492ea", border: "0", width: "120px" }}
              type="button"
              onClick={saveBook}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBook;
