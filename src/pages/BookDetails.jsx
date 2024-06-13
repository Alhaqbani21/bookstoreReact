import React from 'react';
import BooksData from '../BooksData';
import { useNavigate, useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';

function BookDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const book = BooksData.find((e) => e.id === id);

  if (!book) {
    return <div>aaaa</div>;
  }

  return (
    <>
      <NavBar
        leftTitle="Bookstore"
        rightTitle="Home"
        rightTitleLink="../books"
        endTitle="Logout"
        endTitleLink="../"
        nameDetails={localStorage.getItem('namevalue')}
      />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={book.img}
            className="rounded-lg shadow-2xl  lg:w-screen max-md:w-[50%]"
            alt={book.title}
          />
          <div>
            <h1 className="text-5xl font-bold">{book.title}</h1>
            <p className="py-6">{book.summary}</p>
            <p className="py-6 text-green-700 text-2xl font-bold">
              ${book.Price}
            </p>
            <p className="py-6">{book.author}</p>
            <button
              onClick={() => {
                navigate('../books');
              }}
              className="btn btn-primary"
            >
              Purchase
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookDetails;
