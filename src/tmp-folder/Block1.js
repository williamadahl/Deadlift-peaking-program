import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Route} from "react-router-dom";
import {data} from '../data/data'


const Block1 = (props) => {
    const [exercises, setExercises] = useState(data[0]);
    const [name, setName] = useState('');
    const [showWeekOne, setShowWeekOne] = useState(false);
    console.log(showWeekOne)

    return(
        <>
            <h1> Block 1 </h1>
            <button className='btn' onClick={()=>setShowWeekOne(!showWeekOne)}> Week 1 toggle</button>
            {showWeekOne && <>
            <input
                type='text'
                placeholder='hello from block1'
                onChange={event => props.onChange(event.target.value) && setName(event.target.value)}
                // onChange={setName('test')}
            />
            {exercises.map((exercise) => {
                const {id, fields} = exercise;
                return (
                <div key = {id} className='item'>
                <h4>{fields.name}</h4>
                <p>Sets/Reps: {fields.sets} x {fields.reps}</p>
                </div>
                );
            })}
            </>}

        </>
    );
};
export default Block1;