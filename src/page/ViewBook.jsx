import React from 'react';
import './ViewFull.css';

const ViewBook = (props) => {

    return (
        <div className="full-image">
            <img src={props.location.state.book.volumeInfo.imageLinks === undefined
                ? null
                : `${props.location.state.book.volumeInfo.imageLinks.thumbnail}`}
                alt={props.location.state.book.volumeInfo.title} />
            <p className="center"><span className="text-color">Author:</span> {props.location.state.book.volumeInfo.authors === undefined ?
                null : `${props.location.state.book.volumeInfo.authors[0]}`}</p>
            <p className="center"><span className="text-color">Title:</span> {props.location.state.book.volumeInfo.title}</p>
            <p className="center"><span className="text-color">Publisher:</span> {props.location.state.book.volumeInfo.publisher}</p>
            <p className="center"><span className="text-color">Language:</span> {props.location.state.book.volumeInfo.language}</p>
            <p className="center"><span className="text-color">Content Version:</span> {props.location.state.book.volumeInfo.contentVersion}</p>
            <p className="center">Info Link: <span className="text-color"> {props.location.state.book.volumeInfo.infoLink}</span></p>
        </div>
    )
}

export default ViewBook;
