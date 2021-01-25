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
            <h1>test</h1>
            <h2>Exercises</h2>
            <form onSubmit={handleSubmit} className='form'>
                <input type='number' value={weight}  onChange ={(e) => setWeight(e.target.value)}/>
            </form>
            <Router>
                <Switch>

                    <Route exact path='/block1'>
                        <Block1 weight={weight}/>
                    </Route>
                    <Route path='/block2'>
                        <Block2/>
                    </Route>
                    <Route path='/block3'>
                        <Block3/>
                    </Route>
                </Switch>
            <Navbar/>
            </Router>
        </>
    );
};
export default Index;