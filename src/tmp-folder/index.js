import React, {useState, useReducer} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


/* Pages */
import Navbar from './Navbar';
import Block1 from './Block1';
import Block2 from './Block2';
import Block3 from './Block3';
import Block4 from './Block4';
import Home from './Home';
import Modal from './Modal';

import {Provider} from 'react-redux'
import {createStore} from "redux";

const defaultState = {
    isModalOpen: true,
    modalContent: 'hello from modal'
}


const Index = () =>{
    // const navigate = useNavigate();
    // import { useNavigate } from "@reach/router"
    const testValue= 'hello from index'

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