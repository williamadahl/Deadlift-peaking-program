import {Link} from 'react-router-dom';
import React, {useState} from "react";
import {modalContent} from '../data/modalContent'
import InfoModal from './Modal';
import {useSelector} from "react-redux";


const Home = () => {
    const selectGlobalWeight = state => state.calculatedTrainingMax;
    const workingWeight = useSelector(selectGlobalWeight)
    const selectSubmitted1RM = state => state.initialWeight;
    const submitted1RM = useSelector(selectSubmitted1RM )
    const selectShowHomeModal = state => state.showHomeModal
    const showHomeModal = useSelector(selectShowHomeModal)
    const [myModalData] = useState(modalContent[0]);

    return(
        <>
            <h2> Home page </h2>
                <h5> You submitted : {submitted1RM}</h5>
               <h5>Calculated training weight :{workingWeight}</h5>
            <InfoModal
                header={'Welcome to this 12 week deadlift peaking program!'}
                submitWeight={true}
                modalContent={myModalData}
                showModal={showHomeModal}
                dispatchCode={'SET_SHOW_HOME_MODAL'}
            />
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
