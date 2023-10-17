// import {Routes, Route, useNavigate} from 'react-router-dom';
// import PageHeading from "../PageHeading";
// import menuimage from '../Images/icons8-menu-50.png'
// import cartimage from '../Images/icons8-buying-50.png'
// import search from '../Images/search.svg'
// import { useParams } from 'react-router-dom';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// // import { styled } from '@mui/material/styles';
// // import Grid from '@mui/material/Unstable_Grid2';
// // import Paper from '@mui/material/Paper';

// function Home() {

//     const {id} = useParams();
//     const [books, setBooks] = useState([]);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [selectedBook, setSelectedBook] = useState('');


//   const handleSelectedBook = (e) => {
//     const selected = e.target.value;
//     console.log(selected);
//     setSelectedBook(selected);
//     console.log(selectedBook);
//   };

//     useEffect(() => {
//       const fetchBooks = async () => {
//         try {
//           const response = await axios.get(`http://localhost:8080/api/v1/books?name=${searchTerm}`);
//           setBooks(response.data);
//           // console.log(response.data);
//         } catch (error) {
//           console.error('Error fetching books:', error);
//         }
//       };

//       fetchBooks();
//     }, [searchTerm]);
    

//   return (
//     <div class="container1">
//     <div class="header1"> 
//       <div>
//         <div className="text-pageheading">MAYBANK LIBRARY</div>
//       </div>
//       <hr class="line"></hr>
//       <div class="secondheading">
//         <div class="image"><a href={"/menu/"+id}  ><img class="icon" src={menuimage} alt="" /></a></div>
//       <div class="middle-section">
//           <input
//             class="search-bar"
//             type="text"
//             placeholder="Search by book name"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             list='bookNames'
//           />
//           <datalist id="bookNames" onOptionChange = {handleSelectedBook}  >
//             <select>
//             <option value=""></option>
//             {books.map((book) => (
//             <option key={book.bookId} value={book.bookName}></option>
//               ))}
//             </select>
//           </datalist>
          
//             <button class="search-button">
//                 <img class="search-icon" src={search}/>
//             </button>
//         </div>
//         <div class="image"><a href="/cart" ><img class="icon" src={cartimage} alt="" /></a></div>
//       </div>
//       <hr class="line"></hr>
//     </div>
//     {/* <div>
//         {selectedBook && (
//         <div>
//           <h2>Book Details</h2>
//           <p>Book ID: {selectedBook.bookId}</p>
//           <p>Book Name: {selectedBook.bookName}</p>
//           <p>Author Name: {selectedBook.authorName}</p>
//           <p>Due Date: {selectedBook.dueDate}</p>
//         </div>
//       )}
//     </div> */}
//     <br></br>
     
//     </div> 

    
//   );
// }

// export default Home;
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import menuimage from '../Images/icons8-menu-50.png'
import cartimage from '../Images/icons8-buying-50.png'
import search from '../Images/search.svg'

function Home() {
  const { id } = useParams();
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);
  const [clickedButtons, setClickedButtons] = useState([]);

  const handleSelectedBook = () => {
    const selected = document.querySelector('.search-bar').value;
    const book = books.find((b) => b.bookName === selected);
    setSelectedBook(book);
  };

  const addToCart = (book) => {
    if (!clickedButtons.includes(book.bookId)) {
      setClickedButtons([...clickedButtons, book.bookId]);
    const bookToAdd = {
      id:id,
      bookId: book.bookId,
      bookName: book.bookName,
      dueDate: book.dueDate,
    };
    console.log("posting", bookToAdd)
    axios.post('http://localhost:8080/api/v1/cart', bookToAdd);
  }
}
  

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/books?name=${searchTerm}`);
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, [searchTerm]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/books/all');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching all books:', error);
      }
    };

    fetchAllBooks();
  }, []);

  return (
    <div className="container1">
      <div className="header1">
        <div>
          <div className="text-pageheading">MAYBANK LIBRARY</div>
        </div>
        <hr className="line"></hr>
        <div className="secondheading">
        <div class="image"><a href={"/menu/"+id}  ><img class="icon" src={menuimage} alt="" /></a></div>
          <div className="middle-section">
          <input
          className="search-bar"
          type="text"
          placeholder="Search by book name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onBlur={handleSelectedBook}
          list="bookNames"
        />
        <datalist id="bookNames">
          <select>
          {books.map((book) => (
            <option key={book.bookId} value={book.bookName} />
            
          ))}
          </select>
        </datalist>

          </div>
          <div className="image">
            <a href={"/cart/"+id}>
              <img className="icon" src={cartimage} alt="" />
            </a>
          </div>
        </div>
        <hr className="line"></hr>
      </div>
      <div className="grid">
        {books.map((book) => (
        <div key={book.bookId} className="grid-item">
          <h3>{book.bookName}</h3>
          <p>Author: {book.authorName}</p>
          <p>Due Date: {book.dueDate}</p>
          <button className='button1'
              onClick={() => addToCart(book)}
              disabled={clickedButtons.includes(book.bookId)}
            >
              {clickedButtons.includes(book.bookId) ? 'Added to Cart' : 'Add to Cart'}
            </button>
        </div>
        ))}
      </div>
      <br />
    </div>
  );
}

export default Home;


