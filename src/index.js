import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
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
const books = [
  {
    id: 1,
    title: "I am firstBook title",
    img: "https://images-na.ssl-images-amazon.com/images/I/51P8ZmjEhmL._AC_UL600_SR600,400_.jpg",
    author: "I am firstBook author",
  },
  {
    id: 2,
    title: "I am secondBook title",
    img: "https://images-na.ssl-images-amazon.com/images/I/91n7p-j5aqL._AC_UL600_SR600,400_.jpg",
    author: "I am secondBook author",
  },
  { id: 3,
    title: "I am thirdBook title",
    img: "https://images-na.ssl-images-amazon.com/images/I/91PU1YVJm5L._AC_UL600_SR600,400_.jpg",
    author: "I am thirdBook author",
  },
];

function BookList() {
  return (
    <>
      <section className="booklist">
        {books.map((book)=>{
          return (
            <Book key ={book.id} {...book}></Book>
          );
        })}
      </section>
    </>
  );
}
const Book = ({img, title, author}) => {
  //attributes, eventHandler
  //onClick, onMouseOver
  const clickHandler=(e)=>{
    console.log(e);
    console.log(e.target);
    alert('Hello World');
  }
  const complexExample =(author)=>{
    console.log(author);
  }
  return (
    <article className="book" onMouseOver={()=>{
      console.log(title);
    }}>
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>Reference example</button>
      <button type="button" onClick={()=>complexExample(author)}>More Complex example</button>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
