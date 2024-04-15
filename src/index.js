import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const firstBook = {
  author: "Kristin Hannah",
  title: "The Women: A Novel",
  img: "./images/book-1.jpg",
};

const secondBook = {
  author: "James Clear ",
  title: "Atomic Habits",
  img: "./images/book-2.jpg",
};

const BookList = () => {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      ></Book>
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
      <Book />
    </section>
  );
};

const Book = (props) => {
  console.log(props);
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};
// const Book = ({img, title, author, children}) => {};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
