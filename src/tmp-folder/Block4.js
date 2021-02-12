import React, {useState} from 'react';
import {data} from '../data/data';
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";


const Block4 = () => {
    const dispatch = useDispatch();
    /* New achieved max*/
    const selectNewMax = state => state.newAchievedMax;
    const achievedMax = useSelector(selectNewMax);
    /* Previous best */
    const selectPreviousMax = state => state.initialWeight;
    const previousMax = useSelector(selectPreviousMax);

    const [exercises] = useState(data[3]);
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
                <h5>That is an increase of: {achievedMax-previousMax}</h5>
            </>
        )
    }

    return (
        <>
            { showResults && <ResultsComponent/>}
            {  showWorkout && <WorkoutComponent/>}
        </>

    )
};
export default Block4;
