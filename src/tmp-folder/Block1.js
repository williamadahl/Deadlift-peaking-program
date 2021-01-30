import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Route} from "react-router-dom";
import {data} from '../data/data'

const calculateWeight = (percentile,weight) => {
    console.log(percentile, weight)
    return (percentile*weight) /100;
    // const weightToLift = exercise * weight;
    // return weightToLift/100;
};

const Block1 = (props) => {
    const [exercises, setExercises] = useState(data[0]);
    const [name, setName] = useState('');
    const [showWeekOne, setShowWeekOne] = useState(false);
    const [showWeekTwo, setShowWeekTwo] = useState(false);
    const [showWeekThree, setShowWeekThree] = useState(false);
    const [showWeekFour, setShowWeekFour] = useState(false);
    const [weight, setWeight] = useState(250); // Remember to update this weight to be 80% of input
    const [repNumber, setRepNumber] = useState(5);
    console.log(weight);

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return(
        <>
            <h1> Block 1 </h1>
            <h4> Reps managed {repNumber}</h4>
            <button className='btn' onClick={()=>setShowWeekOne(!showWeekOne)}> Week 1</button>
            <button className='btn' onClick={()=>setShowWeekTwo(!showWeekTwo)}> Week 2</button>
            <button className='btn' onClick={()=>setShowWeekThree(!showWeekThree)}> Week 3</button>
            <button className='btn' onClick={()=>setShowWeekFour(!showWeekFour)}> Week 4</button>
            {showWeekOne && <>
                <h2>Week 1</h2>
            {/*<input*/}
            {/*    type='text'*/}
            {/*    placeholder='hello from block1'*/}
            {/*    onChange={event => props.onChange(event.target.value) && setName(event.target.value)}*/}
            {/*    // onChange={setName('test')}*/}
            {/*/>*/}
            {exercises.map((exercise) => {
                const {id, fields} = exercise;
                return (
                <div key = {id} className='item'>
                <h4>{fields.name}</h4>
                <p>Sets/Reps: {fields.sets} x {fields.reps}</p>
                    <p>Weight: {calculateWeight(fields.percentile, weight)}</p>
                </div>
                );
            })}
            <input
                type='number'
                value={repNumber}
                onChange={(e) => setRepNumber(e.target.value)}
            />
            </>}

        </>
    );
};
export default Block1;