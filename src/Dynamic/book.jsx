import React, { useState } from "react";
import "./book.css";
export default function Book() {
  const [books, setBooks] = useState([]);
  const [author,setAuthor]=useState([]);
  function signUp(formData) {
    const bookTitle = formData.get("book");
    const authorName = formData.get("author");
      setBooks((prev_books) => [...prev_books, bookTitle]);
      setAuthor((prev_authors)=>[...prev_authors,authorName]);
    }

  return (
    <>
      <form action={signUp}>
        <label>Enter book</label>
        <input type="text" name="book" /><br></br>
        <label>Author</label>
        <input type="text" name="author"></input>
        <button type="submit">Submit</button>
      </form>
      <div className="main">
      <ul>
        {books.map((book, index) => (<div className="details">
          <h3>Book Title:</h3>
          <p key={index}>{book}</p> 
          
          </div>
        ))}
      </ul>
      <ul>{author.map((author, index) => (<div className="details"> <h3>Author:</h3>
          <p key={index}>{author}</p> 
          </div>
        ))}</ul>
      </div>
    </>
  );
}


// import React from "react";
// export default function Book() {
//   function signUp(event) {
//     event.preventDefault(); 
//     const form = event.target;
//     const book = form.elements.book.value; 
//     const author = form.elements.author.value
//     console.log(book); 
//     const h1 = document.createElement("h1");
//     const author_disp=document.createElement("h1");
//     h1.textContent = "Book:"+book;
//     author_disp.textContent="Author:"+author;
//     form.after(h1,author_disp); 
//   }
//   return (
//     <>
//       <form onSubmit={signUp}> 
//         <h1>Add Book</h1>
//         <label>Enter book</label>
//         <input type="text" name="book" /><br></br>
//         <label>Author</label>
//         <input type="text" name="author" /><br></br>
//         <button type="submit">Submit</button>
//       </form>
//     </>
//   );
// }

