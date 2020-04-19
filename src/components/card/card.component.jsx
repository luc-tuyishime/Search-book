import React from 'react';
import './card.style.css';

export const Card = ({ book }) => {
    return (
        <div className="card-container">
            <a target="_blank" rel="noopener noreferrer" href={book.volumeInfo.previewLink}>
                <img src={book.volumeInfo.imageLinks === undefined
                    ? ""
                    : `${book.volumeInfo.imageLinks.thumbnail}`} alt={book.volumeInfo.title} />
            </a>
            <p><span className="text-color">Author:</span>
                {book.volumeInfo.authors === undefined ? "" : `${book.volumeInfo.authors[0]}`}</p>
            <p><span className="text-color">Title:</span> {book.volumeInfo.title}</p>
            <p><span className="text-color">Publisher:</span> {book.volumeInfo.publisher}</p>
        </div>
    )
}