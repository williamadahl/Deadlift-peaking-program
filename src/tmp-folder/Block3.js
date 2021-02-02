import React, {useState} from 'react';
import {data} from '../data/data'

const Block3 = () => {
    const [exercises] = useState(data[2])
    return(
        <>
            <h1> Block 3 </h1>
            {exercises.map((exercise) =>{
                const {id, fields} = exercise;
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
export default Block3;
