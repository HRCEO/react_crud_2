import React from 'react';
import Modal from "./modal";

const BookTitle = ({bookInfo}) => {


    return (
        <>
            {bookInfo.name}
            {bookInfo.author}
            <button onClick>Info</button>
        </>
    );
};

export default BookTitle;