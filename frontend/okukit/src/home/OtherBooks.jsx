import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";

const OtherBooks = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data.slice(1, 9)));
  }, []);

  return (
    <div>
      <BookCard books={books} headline='Diğer Kitaplar' />
    </div>
  );
};

export default OtherBooks;
