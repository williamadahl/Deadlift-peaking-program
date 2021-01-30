import React from 'react';

const Week = (props) =>{

    const functionHandler = (timesLicked) => {
        props.getNumberOfLicks(timesLicked);
    }
    return (
        <>
            <h5>Some exercises and shit</h5>
            <h5>Something more </h5>
            <input
               input='number'
               onChange={(e) =>functionHandler(parseInt(e.target.value))}
            />
            <h5>Something after input</h5>
        </>
    )
}
export default Week;