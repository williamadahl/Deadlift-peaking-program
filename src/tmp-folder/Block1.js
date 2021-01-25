import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Route} from "react-router-dom";
import {data} from '../data/data'

const calculateWeight = (exercise,weight) => {
    console.log(exercise, weight)
    const weightToLift = exercise * weight;
    return weightToLift/100;
};

const Block1 = ({weight}) => {
    const [exercises, setExercises] = useState(data);
    console.log(weight)

    return(
        <>
            {/*{exercises.map((exercise) => {*/}
            {/*    const {id, fields} = exercise;*/}
            {/*    return (*/}
            {/*        <div key = {id} className='item'>*/}
            {/*            <h4>{fields.name}</h4>*/}
            {/*            <p>Sets/Reps: {fields.main.sets[0]} x {fields.main.reps[0]}</p>*/}
            {/*            <p>Weight: {calculateWeight(fields.percentile, weight)}</p>*/}
            {/*        </div>*/}
            {/*    );*/}
            {/*})}*/}
            <h1> Block 1</h1>

        </>
    );
};
export default Block1;