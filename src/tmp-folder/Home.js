import {Link} from 'react-router-dom';
import React, {useState} from "react";
import {modalContent} from '../data/modalContent'
import InfoModal from './Modal';
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";


const Home = () => {
    const dispatch = useDispatch()
    const selectGlobalWeight = state => state.calculatedTrainingMax;
    const workingWeight = useSelector(selectGlobalWeight)
    const selectSubmitted1RM = state => state.initialWeight;
    const submitted1RM = useSelector(selectSubmitted1RM )
    const selectShowHomeModal = state => state.showHomeModal
    const showHomeModal = useSelector(selectShowHomeModal)
    const [writtenWeight, setWrittenWeight] = useState('');
    const [myModalData] = useState(modalContent[0]);


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
            <InfoModal
                modalContent={myModalData}
                showModal={showHomeModal}
                dispatchCode={'SET_SHOW_HOME_MODAL'}
            />
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
                <button className='btn'>Max Attempt</button>
            </Link>
        </>

    )
};
export default Home;
