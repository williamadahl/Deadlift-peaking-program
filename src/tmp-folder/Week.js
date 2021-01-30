import React from 'react';

const calculateWeight = (percentile,weight) => {
    console.log(percentile, weight)
    return (percentile*weight) /100;
    // const weightToLift = exercise * weight;
    // return weightToLift/100;
};


const Week = (props) => {

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
            {props.exercises.map((exercise) => {
                const {id, fields} = exercise;
                return (
                    <div key = {id} className='item'>
                        <h4>{fields.name}</h4>
                        <p>Sets/Reps: {fields.sets} x {fields.reps}</p>
                        <p>Weight: {calculateWeight(fields.percentile, props.weight)}</p>
                    </div>
                );
            })}
            <h5>Something after input</h5>
        </>
    )
}
export default Week;