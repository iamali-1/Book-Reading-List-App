import React, { useState } from "react";
import BookCreate from './Components/BookCreate';
import BookList from './Components/BookList';

function App() {
  const [books, setBooks] = useState([]);

  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  const createBook = (title) => {
    const newBook = { id: Math.round(Math.random() * 9999), title: title || "" };
    setBooks([...books, newBook]);
  };

  return (
    <>
      <BookList onEdit={editBookById} onDelete={deleteBookById} books={books} />
      <BookCreate onCreate={createBook} />
    </>
  );
}

export default App;
