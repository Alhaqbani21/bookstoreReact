import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import BooksData from '../BooksData';
import BookCard from '../components/BookCard';

function Books() {
  const [searchInput, setSearchInput] = useState('');
  const [filteredBooks, setfilteredBooks] = useState(BooksData);

  function searchBooks() {
    console.log(searchInput);
    if (searchInput != '') {
      const filtered = BooksData.filter(
        (book) =>
          book.title.toLowerCase().includes(searchInput.toLowerCase()) ||
          book.author.toLowerCase().includes(searchInput.toLowerCase())
      );
      setfilteredBooks(filtered);
    } else {
      setfilteredBooks(BooksData);
    }
  }
  return (
    <div>
      <NavBar
        leftTitle="Bookstore"
        rightTitle="Home"
        rightTitleLink="../books"
        endTitle="Logout"
        endTitleLink="../"
        nameDetails={localStorage.getItem('namevalue')}
      />
      <div className="flex justify-center items-center my-8 gap-2">
        <label className="input input-bordered flex items-center gap-2 w-[30%] max-md:w-[50%]">
          <input
            type="text"
            className="grow "
            placeholder="Search"
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        <button onClick={searchBooks} className="btn btn-outline btn-primary">
          Search
        </button>
      </div>
      <div className="flex flex-wrap justify-center items-center my-10 gap-10">
        {filteredBooks.map((e) => {
          return (
            <BookCard
              img={e.img}
              title={e.title}
              price={e.Price}
              author={e.author}
              key={e.id}
              id={e.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Books;
