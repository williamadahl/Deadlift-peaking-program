import React, {useState} from 'react';
import {data} from '../data/data'

const Block2 = () => {
    const [exerices, setExercises] = useState(data[1])
    return(
        <>
            <h1> Block 2 </h1>
            {exerices.map((exercise) => {
                const{id, fields} = exercise;
                return(
                    <div key={id} className='item'>
                        <h4>{fields.name}</h4>
                        <p>Sets/Reps: {fields.sets} x {fields.reps}</p>
                    </div>
                )
            })}
        </>

    )
};
export default Block2;
