import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";

const Week = (props) => {
    const dispatch = useDispatch();
    const selectCalculatedTrainingMax = state => state.calculatedTrainingMax;
    const calculatedTrainingMax = useSelector(selectCalculatedTrainingMax)
    const weightIncreasePerRepOverTarget = 2.5;
    const [repsAchieved, setRepsAchieved] = useState('');

    const calculateWeight = (percentile,weight) => {
        return (percentile*weight) /100;
    };

    const calculateNextWeeksWeight = (targetReps, achievedReps, weightIncrease) =>{
        return (((achievedReps+1) - targetReps) * weightIncrease)

    }
    const handleSubmit = (e) => {
        if(props.isWeekEleven){
            dispatch({type: 'SET_REPS_WEEK_ELEVEN', payload: repsAchieved})
        }
        const nextWeeksWeightIncrease = calculateNextWeeksWeight(props.targetReps, parseInt(repsAchieved), weightIncreasePerRepOverTarget)
        dispatch({type: 'INCREASE_WEIGHT', payload: parseFloat(nextWeeksWeightIncrease)})
        props.handleCloseWeek();
        e.preventDefault()
    }

    return (
        <>
            <h2>Week:{props.weekNumber}</h2>
            {props.exercises.map((exercise) => {
                const {id, fields} = exercise;
                return (
                    <div key = {id} className='item'>
                        <h4>{fields.name}</h4>
                        <p>Sets/Reps: {fields.sets} x {fields.reps}</p>
                        <p>Weight: {Math.round(calculateWeight(fields.percentile, calculatedTrainingMax)*2)/2} kg</p>
                    </div>
                );
            })}
            <form className='form' onSubmit={handleSubmit}>
                <h5>Submit the number of reps achieved on your deadlift main set:</h5>
                <input
                    type="number"
                    value={repsAchieved}
                    onChange={(e) => setRepsAchieved(e.target.value)}
                    required
                />
                <button type='submit'>Submit & Close</button>
            </form>
        </>
    )
}
export default Week;
