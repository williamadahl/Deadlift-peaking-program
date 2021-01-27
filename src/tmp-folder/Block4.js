import React, {useState} from 'react';
import {data} from '../data/data';

const Block4 = () => {
    const [exercises, setExercises] = useState(data[3]);
    return(
        <>
            <h1> Max attempt</h1>
            {exercises.map((exercise) => {
                const{id, fields} = exercise;
                return (
                <div key={id} className='item'>
                    <h4>{fields.name}</h4>
                    <p>Sets/Reps: {fields.sets} x {fields.reps}</p>
                </div>
            )
            })}
        </>

    )
};
export default Block4;
