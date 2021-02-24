import React, {useState} from 'react';
import {data} from '../data/data';
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import InfoModal from "./Modal";
import {modalContent} from "../data/modalContent";
/* commit to test local / global email*/

const Block4 = () => {
    const dispatch = useDispatch();
    const selectNewMax = state => state.newAchievedMax;
    const achievedMax = useSelector(selectNewMax);
    const selectPreviousMax = state => state.initialWeight;
    const previousMax = useSelector(selectPreviousMax);
    const selectShowBlock4Modal = state => state.showBlock4Modal;
    const showBlock4Modal = useSelector(selectShowBlock4Modal);
    const selectRepsWeekEleven = state => state.repsWeekEleven;
    const numberRepsWeekEleven = useSelector(selectRepsWeekEleven);
    const selectCalculatedTrainingMax = state => state.calculatedTrainingMax;
    const calculatedTrainingMax = useSelector(selectCalculatedTrainingMax)
    const [exercises] = useState(data[3]);
    const [myModalData] = useState(modalContent[4])
    const [submittedMax, setSubmittedMax] = useState('');
    const [showWorkout, setShowWorkout] = useState(true);
    const [showResults, setShowResults] = useState(false);

    const calculateSuggestedMax =() => {
        switch (parseInt(numberRepsWeekEleven)) {
            case 1:
                return Math.round(((calculatedTrainingMax*100)/97.5)*2)/2
            case 2:
                return Math.round(((calculatedTrainingMax*100)/95)*2)/2
            case 3:
                return Math.round(((calculatedTrainingMax*100)/92.5)*2)/2
            case 4:
                return Math.round(((calculatedTrainingMax*100)/90)*2)/2
            case 5:
                return Math.round(((calculatedTrainingMax*100)/87.5)*2)/2
            default:
                return Math.round(((calculatedTrainingMax*100)/80.5)*2)/2
        }
    };
    const handleSubmit = (e) => {
        dispatch({type:'SET_NEW_MAX', payload:parseFloat(submittedMax)})
        setShowWorkout(false)
        setShowResults(true)
        e.preventDefault()
    }

    const ResultsComponent = () => {
        return (
            <>
                <h3> Congratulations on completing this peaking program!</h3>
                <h5>Previous best was: {previousMax}</h5>
                <h5>New best is: {achievedMax}</h5>
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
            {  showWorkout &&
                <>
                    <h2> Max attempt!</h2>
                    {exercises.map((exercise) => {
                        const {id, fields} = exercise;
                         return (
                            <div key={id} className='item'>
                            <h4>{fields.name}</h4>
                            <p>Sets/Reps: {fields.sets} x {fields.reps}</p>
                            <p>Weight: {calculateSuggestedMax()} kg</p>
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
            }
            { showResults && <ResultsComponent/>}
        </>

    )
};
export default Block4;
