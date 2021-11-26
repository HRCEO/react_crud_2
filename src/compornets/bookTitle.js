import React from 'react';

const BookTitle = ({bookInfo}) => {
    return (
        <>
            {bookInfo.name}
            {bookInfo.author}
            <button onClick={()=>{
                Home();
            }}>Info</button>
        </>
    );
};

function Home() {
    return console.log('test');
}

export default BookTitle;