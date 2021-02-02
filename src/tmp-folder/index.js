import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


/* Pages */
import Navbar from './Navbar';
import Block1 from './Block1';
import Block2 from './Block2';
import Block3 from './Block3';
import Block4 from './Block4';
import Home from './Home';

import {Provider} from 'react-redux'
import {createStore} from "redux";
import reducer from '../store/reducer'

const store = createStore(reducer);

const Index = () =>{
    console.log(store.getState())

    return (
        <Provider store={store}>
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
        </Provider>
    );
};
export default Index;