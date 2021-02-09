import {Link} from 'react-router-dom';
import React, {useState} from "react";
import Modal from './Modal';
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";


const Home = () => {
    const dispatch = useDispatch()
    const selectGlobalWeight = state => state.calculatedTrainingMax;
    const selectSubmitted1RM = state => state.initialWeight;
    const workingWeight = useSelector(selectGlobalWeight)
    const submitted1RM = useSelector(selectSubmitted1RM )
    const [writtenWeight, setWrittenWeight] = useState('');

    const [showModal, setShowModal] = useState(false)


    const handleSubmit = e => {
        console.log('submitted to store')
        dispatch({ type: 'SET_WEIGHT', payload: writtenWeight})
        e.preventDefault()
    }

    return(
           <>
            <h3> Home page </h3>
                <h5> You submitted : {submitted1RM}</h5>
               <h5>Calculated training weight :{workingWeight}</h5>
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
               <Link to='/results'>
                   <button className='btn'>Results </button>
               </Link>
        </>

    )
};
export default Home;
