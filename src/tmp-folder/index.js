import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {data} from "../data/data";

/* Pages */

import Navbar from './Navbar';
import Block1 from './Block1';
import Block2 from './Block2';
import Block3 from './Block3';
import Block4 from './Block4';
import Home from "./Home";



const calculateWeight = (exercise,weight) => {
        // console.log(exercise, weight)
        const weightToLift = exercise * weight;
        return weightToLift/100;
};


const Index = () =>{
    const [exercises, setExercises] = useState(data);
    const [weight, setWeight] = useState(1);
    const [value, setValue] = useState(3);

    const handleSubmit =(e) =>{
        e.preventDefault();
        if(weight){
            setWeight(weight);
        }
    };
    // const onChangeHandler = (value) => {
    //     setValue(value.target.value);
    // };

    return (
        <>
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <Home/>
                    </Route>
                    <Route exact path='/block1'>
                        <Block1 />
                    </Route>
                    <Route path='/block2'>
                        <Block2/>
                    </Route>
                    <Route path='/block3'>
                        <Block3/>
                    </Route>
                    <Route path='/block4'>
                        <Block4/>
                    </Route>
                </Switch>
            <Navbar/>
            </Router>
        </>
    );
};
export default Index;