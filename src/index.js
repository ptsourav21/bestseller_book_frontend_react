import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { books } from "./books";
import Book from "./Book.js";

//stateless functional component
//always return single element
//div/section/ article or React.fragment
//use camelCase for html attribute
//formatting
//Nested Components, React Tools
//css

// const firstBook = {
//   title: "I am firstBook title",
//   img: "https://images-na.ssl-images-amazon.com/images/I/51P8ZmjEhmL._AC_UL600_SR600,400_.jpg",
//   author: "I am firstBook author",
// };
// const secondBook = {
//   title: "I am secondBook title",
//   img: "https://images-na.ssl-images-amazon.com/images/I/91n7p-j5aqL._AC_UL600_SR600,400_.jpg",
//   author: "I am secondBook author",
// };

//Use of lists(simple list)

function BookList() {
  return (
    <>
      <section className="booklist">
        {books.map((book) => {
          return <Book key={book.id} {...book}></Book>;
        })}
      </section>
    </>
  );
}

ReactDOM.render(<BookList />, document.getElementById("root"));
