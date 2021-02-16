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
/** TODO add checkmark for each week / block completed ++ add some feedback on the completed tasks
 *
 */


const Week = (props) => {
    const dispatch = useDispatch();
    const selector = state => state.calculatedTrainingMax;
    const calculatedTrainingMax = useSelector(selector)
    const weightIncreasePerRepOverTarget = 2.5;
    const [repsAchieved, setRepsAchieved] = useState('');


    const handleSubmit = (e) => {
            const nextWeeksWeightIncrease = calculateNextWeeksWeight(props.targetReps, parseInt(repsAchieved), weightIncreasePerRepOverTarget)
            dispatch({type: 'INCREASE_WEIGHT', payload: parseFloat(nextWeeksWeightIncrease)})
            // props.handleCloseWeek;
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
                        <p>Weight: {calculateWeight(fields.percentile, calculatedTrainingMax)} kg</p>
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
