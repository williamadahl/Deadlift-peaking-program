import React, {useState} from 'react';
import {data} from '../data/data';
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import InfoModal from "./Modal";
import {modalContent} from "../data/modalContent";


const Block4 = () => {
    const dispatch = useDispatch();
    const selectNewMax = state => state.newAchievedMax;
    const achievedMax = useSelector(selectNewMax);
    const selectPreviousMax = state => state.initialWeight;
    const previousMax = useSelector(selectPreviousMax);
    const selectShowBlock4Modal = state => state.showBlock4Modal;
    const showBlock4Modal = useSelector(selectShowBlock4Modal);
    const [exercises] = useState(data[3]);
    const [myModalData] = useState(modalContent[4])
    const [submittedMax, setSubmittedMax] = useState('');
    const [showWorkout, setShowWorkout] = useState(true);
    const [showResults, setShowResults] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({type:'SET_NEW_MAX', payload:parseFloat(submittedMax)})
        setShowWorkout(false)
        setShowResults(true)
    }

    const WorkoutComponent = () => {
        console.log('rendered workout')
            return (
                <>
                    <h1> Max attempt</h1>
                    <h5>This is achieved max :{achievedMax}</h5>
                    {exercises.map((exercise) => {
                        const {id, fields} = exercise;
                        return (
                            <div key={id} className='item'>
                                <h4>{fields.name}</h4>
                                <p>Sets/Reps: {fields.sets} x {fields.reps}</p>
                            </div>
                        )
                    })}
                    <form className='form' onSubmit={handleSubmit}>
                        <input
                            type='number'
                            value={submittedMax}
                            onChange={(e) => setSubmittedMax(e.target.value)}
                        />
                        <button type='submit'>Submit new Max</button>
                    </form>
                </>
            )
    };

    const ResultsComponent = () => {
        console.log('rendered results')
        return (
            <>
                <h3> Congratulations on completing this peaking program</h3>
                <h5>Previous best: {previousMax}</h5>
                <h5>New best: {achievedMax}</h5>
                <h5>That is an increase of: {achievedMax-previousMax} kg! Well done!</h5>
                <p> After you have completed these twelve weeks I highly suggest a week off training before you
                    go into a hypertrophy phase where you work on any weaknesses you might have. You absolutely
                    CANNOT go back-to-back peaking your 1RM. Doing so will, in a best case scenario, only lead to
                    stagnation, but most likely in injury. Train hard but also train smart!</p>
            </>
        )
    }

    return (
        <>
            <InfoModal
                header={'Max attempt'}
                submitWeight={false}
                modalContent={myModalData}
                showModal={showBlock4Modal}
                dispatchCode={'SET_SHOW_BLOCK4_MODAL'}
            />
            { showResults && <ResultsComponent/>}
            {  showWorkout && <WorkoutComponent/>}
        </>

    )
};
export default Block4;
