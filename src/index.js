import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const author = "Kristin Hannah";
const title = "The Women: A Novel";
const img = "./images/book-1.jpg";

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
