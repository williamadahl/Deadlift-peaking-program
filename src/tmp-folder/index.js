import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


/* Pages */
import Navbar from './Navbar';
import Block1 from './Block1';
import Block2 from './Block2';
import Block3 from './Block3';
import Block4 from './Block4';
import Home from './Home';

import store from '../store/store';
import {Provider} from 'react-redux'

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
                    <Route exact path='/block2'>
                        <Block2/>
                    </Route>
                    <Route exact path='/block3'>
                        <Block3/>
                    </Route>
                    <Route exact path='/block4'>
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