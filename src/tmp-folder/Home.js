import {BrowserRouter as Router, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import React, {useState} from "react";
// import store from '../store/store'
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
// import store from "../store/store";


const Home = () => {
    const dispatch = useDispatch()
    const someShit = state => state.globalWeight;

    const [writtenWeight, setWrittenWeight] = useState('');

    const storeWeight = useSelector(someShit)

    const handleSubmit = e => {
        console.log('submitted to store')
        e.preventDefault()
        dispatch({ type: 'SET_WEIGHT', payload: parseInt(writtenWeight) })


    }

    return(
        <>
            <h3> Home page </h3>
            <h5> Store weight: {storeWeight}</h5>
            <h5> You submitet : {writtenWeight}</h5>
            <form className='form' onSubmit={handleSubmit}>
                <input
                    type="number"
                    value={writtenWeight}
                    onChange={(e) => setWrittenWeight(e.target.value)}
               />
               <button type='submit'>Submit Weight</button>
            </form>
            <Link to='/block1'>
                <button className='btn'>Block 1</button>
            </Link>
            <Link to='/block2'>
                <button className='btn'>Block 2</button>
            </Link>
            <Link to='/block3'>
                <button className='btn'>Block 3</button>
            </Link>
            <Link to='/block4'>
                <button className='btn'>Block 4</button>
            </Link>
        </>

    )
};
export default Home;
