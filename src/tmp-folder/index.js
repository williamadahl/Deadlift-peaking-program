import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {data} from "../data/data";

/* Pages */

import Navbar from './Navbar';
import Block1 from './Block1';
import Block2 from './Block2';
import Block3 from './Block3';
import Final from './Final';


const calculateWeight = (exercise,weight) => {
        console.log(exercise, weight)
        const weightToLift = exercise * weight;
        return weightToLift/100;
};


const Index = () =>{
    const [exercises, setExercises] = useState(data);
    const [weight, setWeight] = useState(0);

    const handleSubmit =(e) =>{
        e.preventDefault();
        if(weight){
            setWeight(weight);
        }
    };

    return (
        <>
            <Router>
                <switch>
                    <Route>

            <h2>Exercises</h2>
            <form onSubmit={handleSubmit} className='form'>
                <input type='number' value={weight}  onChange ={(e) => setWeight(e.target.value)}/>
            </form>
            {exercises.map((exercise) => {
                const {id, fields} = exercise;
                return (
                    <div key = {id} className='item'>
                        <h4>{fields.name}</h4>
                        <p>Sets/Reps: {fields.main.sets[0]} x {fields.main.reps[0]}</p>
                        <p>Weight: {calculateWeight(fields.percentile, weight)}</p>
                    </div>
                );
            })}
                    </Route>
                </switch>
            </Router>
        </>
    );
};
export default Index;