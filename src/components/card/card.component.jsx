import React from 'react';
import { Link } from 'react-router-dom';

import './card.style.css';

export const Card = ({ book }) => {
    return (
        <div className="card-container">
            <Link to={{ pathname: `book/${book.id}`, state: { book: book } }}>
                <img src={book.volumeInfo.imageLinks === undefined
                    ? null
                    : `${book.volumeInfo.imageLinks.thumbnail}`} alt={book.volumeInfo.title} />
            </Link>
            <p><span className="text-color">Author:</span> {book.volumeInfo.authors === undefined ?
                null : `${book.volumeInfo.authors[0]}`}</p>
            <p><span className="text-color">Title:</span> {book.volumeInfo.title}</p>
            <p><span className="text-color">Publisher:</span> {book.volumeInfo.publisher}</p>

        </div>
    )
}