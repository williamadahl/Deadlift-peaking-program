import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Route} from "react-router-dom";
import {data} from '../data/data'


const Block1 = ({weight}) => {
    const [exercises, setExercises] = useState(data[0]);
    console.log(exercises[0]);

    return(
        <>
            <h1> Block 1 </h1>
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


        </>
    );
};
export default Block1;