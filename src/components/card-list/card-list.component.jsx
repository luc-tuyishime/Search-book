import React from 'react';
import { Card } from '../card/card.component';

import './card-list.style.css';


export const CardList = (props) => {
    return (
        <div className="card-list">
            {props.result.map(book => (
                <>
                    <Card key={book.id} book={book} />
                </>
            ))}
        </div>
    )
}