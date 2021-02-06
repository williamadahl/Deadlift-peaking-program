import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";

const calculateWeight = (percentile,weight) => {
    console.log(percentile, weight)
    return (percentile*weight) /100;
};

const calculateNextWeeksWeight = (targetReps, achievedReps, weightIncrease) =>{
    /* For reaching target reps you also are credited 2.5 kg increase for the next week*/
    return (((achievedReps+1) - targetReps) * weightIncrease)

}


const WeekNew = (props) => {
    const dispatch = useDispatch();
    const selector = state => state.globalWeight;
    const globalWeight = useSelector(selector)
    const weightIncreasePerRepOverTarget = 2.5;
    const [repsAchieved, setRepsAchieved] = useState('');

    const handleSubmit = (e) => {
        const nextWeeksWeightIncrease = calculateNextWeeksWeight(props.targetReps, parseInt(repsAchieved), weightIncreasePerRepOverTarget)
        dispatch({type: 'INCREASE_WEIGHT', payload: parseFloat(nextWeeksWeightIncrease)})
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
                        <p>Weight: {calculateWeight(fields.percentile, globalWeight)}</p>
                    </div>
                );
            })}
            <form className='form' onSubmit={handleSubmit}>
                <h5>Submit the number of reps achieved on your deadlift main set:</h5>
                <input
                    type="number"
                    value={repsAchieved}
                    onChange={(e) => setRepsAchieved(e.target.value)}
                />
                <button type='submit'>Submit Reps</button>
            </form>
        </>
    )
}
export default WeekNew;
