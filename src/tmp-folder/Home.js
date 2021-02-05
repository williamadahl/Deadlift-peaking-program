import {BrowserRouter as Router, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import React, {useState} from "react";
// import store from '../store/store'
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
// import store from "../store/store";


const Home = (props) => {
    const weight = 20;
    const dispatch = useDispatch()
    const someShit = state => state.globalWeight;

    const [writtenWeight, setWrittenWeight] = useState(0);

    const storeWeight = useSelector(someShit)


    const handleChange = e => {
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            setWrittenWeight(e.target.value);
            // this.setState({number: e.target.value})
        }
    }

    const handleSubmit = e => {
        console.log('submitted to store')
        e.preventDefault()
        dispatch({ type: 'SET_WEIGHT', payload: parseInt(writtenWeight) })


    }
    const handleKeyDown = e => {
        if(!isNaN(e.target.value)){
            dispatch({ type: 'SET_WEIGHT', payload: parseInt(e.target.value) })
            // And clear out the text input
            setWrittenWeight(0)
        }
    };
    // dispatch({type: 'SET_WEIGHT', payload: weight})

    return(
        <>
            <h3> Home page </h3>
            <h5> Store weight: {storeWeight}</h5>
            <h5> You submitet : {writtenWeight}</h5>
            {/*<h5> Global weight: {props.globalWeight}</h5>*/}
            {/*<button className='btn' onClick={dispatch({type: 'SET_WEIGHT', payload: 10})}> Weight up</button>*/}
            {/*<button className='btn' onClick={()=>onSetWeight}> Weight up</button>*/}
            <form className='form' onSubmit={handleSubmit}>
                <input
                    type="number"
                    value={writtenWeight}
                    onChange={(e) => setWrittenWeight(e.target.value)}
                    // onKeyDown={handleKeyDown}
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
            {/*<button className='btn' onClick={}> Block 2</button>*/}
            {/*<button className='btn' onClick={}> Block 3</button>*/}
            {/*<button className='btn' onClick={}> Block 4</button>*/}
            {/*<Block1 onChange= {value =>setMessage(value)}/>*/}
            {/*<p>This is the message:  {message}</p>*/}
            {/*<form className='form'>*/}
            {/*    <input type='number' value={value} onChange={setValue}/>*/}
            {/*</form>*/}
        </>

    )
};
// const mapStateToProps = (state) => ({
//     globalWeight: state.globalWeight
// })

// const mapDispatchToProps = (dispatch) => {
//     return{
//         onSetWeight: () => dispatch({type:'SET_WEIGHT', payload:2})
//     }
// }
export default Home;
// connect(mapStateToProps, mapDispatchToProps)(Home);
